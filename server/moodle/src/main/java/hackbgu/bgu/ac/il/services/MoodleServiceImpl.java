package hackbgu.bgu.ac.il.services;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import hackbgu.bgu.ac.il.model.*;
import hackbgu.bgu.ac.il.model.Assignment;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import jdk.nashorn.internal.ir.*;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.json.JSONArray;
import org.json.JSONObject;

public class MoodleServiceImpl implements MoodleService {
	private final MoodleRestClient restClient;
	private final SerializationUtils serializationUtils;
	public MoodleServiceImpl(){
		restClient = new MoodleRestClient();
		serializationUtils = new SerializationUtils();
	}

	public String listCoursesOfUser(String username) throws Exception {
		User user = getUserByUsername(username);
		return getCoursesOfUserById(user.id);
	}

	public String getUser(String username) throws Exception {
		User user = getUserByUsername(username);
		String getCourses = MoodleOperation.listUserCourses.getOperation() + "&userid=" + user.id;
		List<Course> serCourses = ((List<Course>)serializationUtils.deserializeGeneric(restClient.sendRest(getCourses), TypeReferenceSerializationHelper.class, List.class, Course.class));
		user.courseIds = serCourses.stream().map(course -> course.id).collect(Collectors.toList());
		return serializationUtils.serialize(user);
	}

//	public String getAssignmentStatus() throws Exception{
//		String getCourses = MoodleOperation.getAssignmentStatus.getOperation() + "&userid=" + 4 + "&assignid="+ 1;
//		return restClient.sendRest(getCourses);
//	}

	public String getUserEvents(String username) throws Exception {
		User user = getUserByUsername(username);
//		System.out.println("User Name: " + user.username);
		String response = getCoursesOfUserById(user.id);
		List<Course> courses = ((List<Course>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Course.class));
//		String coursesIdsParameter = "";
		for (Course course : courses){
//			coursesIdsParameter = coursesIdsParameter + "&courseids%5B%5D="+course.id;
//			String getAssignments = MoodleOperation.getAssignmentsByCourse.getOperation() + coursesIdsParameter;
//			String sendRest = restClient.sendRest(getAssignments);
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
//					System.out.println("Forum Name: " + forum.name + " Forum ID: " + forum.id);
				response = getForumsMessages(forum.id);
				List<Message> messages = ((List<Message>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Message.class));
				for(Message message: messages){
					message.timemodified = new Date((Long.parseLong(message.timemodified, 10)) * 1000L).toString();
					message.message = message.message.replaceAll("\\<[^>]*>","");
				}
//					for(Message message : messages){
//						System.out.println("User Name: " + message.userfullname + " Subject: " + message.subject + " Message: " + message.message);
//					}
				forum.messages = messages;
			}
			course.forums = forums;
//			List<Course> serCourses = (serializationUtils.deserialize(sendRest, Courses.class)).courses;
//			for (Course course1 : serCourses){
//				List<Assignment> assignments = new ArrayList<>();
//				System.out.println("Course Name: " + course1.fullname + " Course ID: " + course1.id);

//				Optional<Course> optShortName = courses.stream().filter(c->c.id.equals(course1.id)).findFirst();
//				String shortname = null;
//				if (optShortName.isPresent()){
//					shortname = optShortName.get().shortname;
//				}
//				for (Assignment ass : course1.assignments){
////					System.out.println("Assignment Name: " + ass.name + "  ");
//					String submissionsSer = getAssignmentSubmissions(ass.id);
//					List<Assignment> assignments2 = serializationUtils.deserialize(submissionsSer, Assignments.class).assignments;
//					List<Submission> submissions = assignments2.get(0).submissions;
//					ass.courseShortName = shortname;
//					ass.submissions = submissions.stream().filter(sub ->sub.userid.equals(user.id)).collect(Collectors.toList());
//				}
//				assignments.addAll(course1.assignments);
//				course.assignments = course1.assignments;
		}
		user.courses = courses;
//			user.courseIds = serCourses.stream().map(course2 -> course.id).collect(Collectors.toList());
//			user.courseIdNumbers = courses.stream().map(course2 -> course.idnumber).collect(Collectors.toList());

//			user.assignments = assignments;
//		}


		return serializationUtils.serialize(user);
	}

	public String getForumsByCourse(String courseId) throws Exception {
		String forums = restClient.sendRest(MoodleOperation.getForumsCourse.getOperation() + "&courseids[0]="+ courseId);
		return forums;

	}

	public String getResourcesByCourse(String courseId) throws Exception {
		String resources = MoodleOperation.getResourcesCourse.getOperation() + "&courseids[0]="+ courseId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(resources));
		return jsonobject.get("resources").toString();
	}

	public String getAssignmentByCourse(String courseId) throws Exception {
//		String assignments = MoodleOperation.getAssignmentsByCourse.getOperation() + "&courseids[0]="+ courseId;
//		JSONObject jsnobject = new JSONObject(restClient.sendRest(assignments));
//		String courses = jsnobject.get("courses").toString();
//		jsnobject = new JSONObject(courses.substring(1, courses.length() - 1));
//
//		return jsnobject.get("assignments").toString();

		String assignments = MoodleOperation.getAssignmentsByCourse.getOperation() + "&courseids[0]="+ courseId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(assignments));
		JSONArray courses = (JSONArray) jsonobject.get("courses");
		jsonobject = (JSONObject)courses.get(0);
		return jsonobject.get("assignments").toString();

	}

	public String getForumsMessages(String forumId) throws Exception {
		String getForumsMessage = MoodleOperation.getMessagesByCourses.getOperation() + "&forumid=" +forumId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(getForumsMessage));
		return jsonobject.get("discussions").toString();

	}

	public String getAssignmentSubmissions(String assignmentId, String userId) throws Exception {
		String getSubmissions = MoodleOperation.getAssignmentStatus.getOperation() + "&assignid=" + assignmentId + "&userid=" + userId;
		JSONObject jsonobject = new JSONObject(restClient.sendRest(getSubmissions));
		return "[" + jsonobject.get("gradingsummary").toString() + "]";

	}

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

//	public static void main(String[] args) throws Exception{
//		MoodleServiceImpl service = new MoodleServiceImpl();
////		System.out.println(/*service.getUserAssignments("asadon")*/service.getAssignmentStatus());
//		System.out.println(service.getUserWithAssignments("asadon"));
//	}

	public String getAllUsers() throws IOException {
		String getUsers = MoodleOperation.getAllUsers.getOperation() + "&criteria[0][key]=email&criteria[0][value]=%%";
		return restClient.sendRest(getUsers);
	}

	private String getCoursesOfUserById(String userId) throws IOException {
		String getCourses = MoodleOperation.listUserCourses.getOperation() + "&userid=" + userId;
		return restClient.sendRest(getCourses);
	}

	private User getUserByUsername(String username) throws Exception {
		String user = restClient.sendRest(MoodleOperation.getUserByField.getOperation() + "&field=username&values%5B0%5D="+username);
		return ((List<User>)serializationUtils.deserializeGeneric(user, TypeReferenceSerializationHelper.class, List.class, User.class)).get(0);
	}
}
