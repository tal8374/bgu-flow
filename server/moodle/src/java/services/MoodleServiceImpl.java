package services;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import model.*;
import model.Assignment;
import org.json.JSONArray;
import org.json.JSONObject;

public class MoodleServiceImpl implements MoodleService {
	private final MoodleRestClient restClient;
	private final SerializationUtils serializationUtils;
	public MoodleServiceImpl(){
		restClient = new MoodleRestClient();
		serializationUtils = new SerializationUtils();
	}

	/**
	 * get user courses
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public String listCoursesOfUser(String username) throws Exception {
		User user = getUserByUsername(username);
		return getCoursesOfUserById(user.id);
	}

	/**
	 * extract user courses
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public String getUser(String username) throws Exception {
		User user = getUserByUsername(username);
		String getCourses = MoodleOperation.listUserCourses.getOperation() + "&userid=" + user.id;
		List<Course> serCourses = ((List<Course>)serializationUtils.deserializeGeneric(restClient.sendRest(getCourses), TypeReferenceSerializationHelper.class, List.class, Course.class));
		user.courseIds = serCourses.stream().map(course -> course.id).collect(Collectors.toList());
		return serializationUtils.serialize(user);
	}

	/**
	 * get user events
	 * @param username
	 * @return
	 * @throws Exception
	 */
	public String getUserEvents(String username) throws Exception {
		User user = getUserByUsername(username);
		String response = getCoursesOfUserById(user.id);
		List<Course> courses = ((List<Course>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Course.class));
		for (Course course : courses){
			response = getResourcesByCourse(course.id);
			List<Resource> resources = ((List<Resource>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Resource.class));
			for(Resource resource : resources){
				resource.timemodified = new Date((Long.parseLong(resource.timemodified, 10)) * 1000L).toString();
			}
			course.resources = resources;
			response = getAssignmentByCourse(course.id);
			List<Assignment> assignments = ((List<Assignment>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Assignment.class));
			for (Assignment assignment : assignments) {
				assignment.duedate = new Date((Long.parseLong(assignment.duedate, 10)) * 1000L).toString();
				assignment.timemodified = new Date((Long.parseLong(assignment.timemodified, 10)) * 1000L).toString();
				response = getAssignmentSubmissions(assignment.id, user.id);
				List<Submission> submissions = ((List<Submission>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Submission.class));
				if(Integer.parseInt(submissions.get(0).submissionssubmittedcount) == 0)
					assignment.submission = "false";
				else assignment.submission = "true";
			}
			course.assignments = assignments;
			response = getForumsByCourse(course.id);
			List<Forum> forums = ((List<Forum>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Forum.class));
			for(Forum forum : forums){
				response = getForumsMessages(forum.id);
				List<Message> messages = ((List<Message>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Message.class));
				for(Message message: messages){
					message.timemodified = new Date((Long.parseLong(message.timemodified, 10)) * 1000L).toString();
					message.message = message.message.replaceAll("\\<[^>]*>","");
				}
				forum.messages = messages;
			}
			course.forums = forums;
		}
		user.courses = courses;


		return serializationUtils.serialize(user);
	}

	/**
	 * get course forums
	 * @param courseId
	 * @return
	 * @throws Exception
	 */
	public String getForumsByCourse(String courseId) throws Exception {
		String forums = restClient.sendRest(MoodleOperation.getForumsCourse.getOperation() + "&courseids[0]="+ courseId);
		return forums;

	}

	/**
	 * get the course resources
	 * @param courseId
	 * @return
	 * @throws Exception
	 */
	public String getResourcesByCourse(String courseId) throws Exception {
		String resources = MoodleOperation.getResourcesCourse.getOperation() + "&courseids[0]="+ courseId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(resources));
		return jsonobject.get("resources").toString();
	}

	/**
	 * get the course assignments
	 * @param courseId
	 * @return
	 * @throws Exception
	 */
	public String getAssignmentByCourse(String courseId) throws Exception {
		String assignments = MoodleOperation.getAssignmentsByCourse.getOperation() + "&courseids[0]="+ courseId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(assignments));
		JSONArray courses = (JSONArray) jsonobject.get("courses");
		jsonobject = (JSONObject)courses.get(0);
		return jsonobject.get("assignments").toString();

	}

	/**
	 * get forum messages
	 * @param forumId
	 * @return
	 * @throws Exception
	 */
	public String getForumsMessages(String forumId) throws Exception {
		String getForumsMessage = MoodleOperation.getMessagesByCourses.getOperation() + "&forumid=" +forumId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(getForumsMessage));
		return jsonobject.get("discussions").toString();

	}

	/**
	 * get user assignment submissions
	 * @param assignmentId
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	public String getAssignmentSubmissions(String assignmentId, String userId) throws Exception {
		String getSubmissions = MoodleOperation.getAssignmentStatus.getOperation() + "&assignid=" + assignmentId + "&userid=" + userId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(getSubmissions));
		return "[" + jsonobject.get("gradingsummary").toString() + "]";

	}

	/**
	 * get courses
	 * @param courseId
	 * @return
	 * @throws Exception
	 */
	public String getCourse(String courseId) throws Exception {
		String getCourses = MoodleOperation.getCourses.getOperation();
		String response = restClient.sendRest(getCourses);
		List<Course> allCourses = (serializationUtils.deserialize(response, Courses.class)).courses;
		Optional<Course> course = allCourses.stream().filter(c->c.id.equals(courseId)).findFirst();
		if (!course.isPresent()){
			return null;
		}
		return serializationUtils.serialize(course.get());
	}

	/**
	 * get users
	 * @return
	 * @throws IOException
	 */
	public String getAllUsers() throws IOException {
		String getUsers = MoodleOperation.getAllUsers.getOperation() + "&criteria[0][key]=email&criteria[0][value]=%%";
		return restClient.sendRest(getUsers);
	}

	/**
	 * get user courses by user ID
	 * @param userId
	 * @return
	 * @throws IOException
	 */
	private String getCoursesOfUserById(String userId) throws IOException {
		String getCourses = MoodleOperation.listUserCourses.getOperation() + "&userid=" + userId;
		return restClient.sendRest(getCourses);
	}

	/**
	 * get user object by user name
	 * @param username
	 * @return
	 * @throws Exception
	 */
	private User getUserByUsername(String username) throws Exception {
		String user = restClient.sendRest(MoodleOperation.getUserByField.getOperation() + "&field=username&values%5B0%5D="+username);
		return ((List<User>)serializationUtils.deserializeGeneric(user, TypeReferenceSerializationHelper.class, List.class, User.class)).get(0);
	}
}
