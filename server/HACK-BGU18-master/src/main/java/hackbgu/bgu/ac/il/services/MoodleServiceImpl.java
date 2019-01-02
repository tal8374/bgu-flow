package hackbgu.bgu.ac.il.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import hackbgu.bgu.ac.il.model.Assignment;
import hackbgu.bgu.ac.il.model.Assignments;
import hackbgu.bgu.ac.il.model.Course;
import hackbgu.bgu.ac.il.model.Courses;
import hackbgu.bgu.ac.il.model.Submission;
import hackbgu.bgu.ac.il.model.User;

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
	
	public String getAssignmentStatus() throws Exception{
		String getCourses = MoodleOperation.getAssignmentStatus.getOperation() + "&userid=" + 4 + "&assignid="+ 1;
		return restClient.sendRest(getCourses);
	}
	
	public String getUserWithAssignments(String username) throws Exception {
		User user = getUserByUsername(username);
		String response = getCoursesOfUserById(user.id);
		List<Course> courses = ((List<Course>)serializationUtils.deserializeGeneric(response, TypeReferenceSerializationHelper.class, List.class, Course.class));
		String coursesIdsParameter = "";
		for (Course course : courses){
			coursesIdsParameter= coursesIdsParameter + "&courseids%5B%5D="+course.id;
		}
		String getAssignments = MoodleOperation.getAssignments.getOperation() + coursesIdsParameter;
		String sendRest = restClient.sendRest(getAssignments);
		List<Course> serCourses = (serializationUtils.deserialize(sendRest, Courses.class)).courses;
		List<Assignment> assignments = new ArrayList<>();
		for (Course course : serCourses){
			Optional<Course> optShortName = courses.stream().filter(c->c.id.equals(course.id)).findFirst();
			String shortname = null;
			if (optShortName.isPresent()){
				shortname = optShortName.get().shortname;
			}
			for (Assignment ass : course.assignments){
				String submissionsSer = getAssignmentSubmissions(ass.id);
				List<Assignment> assignments2 = serializationUtils.deserialize(submissionsSer, Assignments.class).assignments;
				List<Submission> submissions = assignments2.get(0).submissions;
				ass.courseShortName = shortname;
				ass.submissions = submissions.stream().filter(sub ->sub.userid.equals(user.id)).collect(Collectors.toList());
			}
			assignments.addAll(course.assignments);
		}
		user.courseIds = serCourses.stream().map(course -> course.id).collect(Collectors.toList());
		user.courseIdNumbers = courses.stream().map(course -> course.idnumber).collect(Collectors.toList());

		user.assignments = assignments;
		
		return serializationUtils.serialize(user);
	}
	
	public String getAssignmentSubmissions(String assignmentId) throws Exception {
		String getCourses = MoodleOperation.getSubmissionsForAssignment.getOperation() + "&assignmentids%5B%5D=" + assignmentId;
		return restClient.sendRest(getCourses);
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
	
	public static void main(String[] args) throws Exception{
		MoodleServiceImpl service = new MoodleServiceImpl();
//		System.out.println(/*service.getUserAssignments("asadon")*/service.getAssignmentStatus());
		System.out.println(service.getUserWithAssignments("asadon"));
	}
	
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
