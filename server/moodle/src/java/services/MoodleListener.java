package services;

import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import model.*;
import java.io.IOException;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

public class MoodleListener implements Runnable{
	private SerializationUtils serializationUtils = new SerializationUtils();
	private HashMap<String, List<String>> sentEvents = new HashMap<>();

	/**
	 * extract the users from moodle
	 * @param username of user
	 * @throws Exception
	 */
	public void pollMoodle(String username) throws Exception {
	   MoodleService moodleService = new MoodleServiceImpl();
	   List<User> allUsers = serializationUtils.deserialize(moodleService.getAllUsers(), Users.class).users;
	   for(User user: allUsers){
	   	if(user.username.equals(username))
		   processUser(moodleService, user);
	   }
   }

   public static void main(String[] args){
	   final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
		scheduler.scheduleAtFixedRate(new MoodleListener(), 2, 60, TimeUnit.SECONDS);
   }

	/**
	 * extract user events from moodle
	 * @param moodleService object
	 * @param user object
	 * @throws Exception
	 */
	private void processUser(MoodleService moodleService, User user) throws Exception {
		User userWithEvents = serializationUtils.deserialize(moodleService.getUserEvents(user.username), User.class);
		String userKey = "user"+user.username;
		if (!sentEvents.containsKey(userKey)) {
			String event = createUserEvent(user);
			sendEvent(new BEvent("User"), event);
			List<String> userEvents = new ArrayList<>();
			userEvents.add(event);
			sentEvents.put(userKey, userEvents);
		}

		for (Course course : userWithEvents.courses) {
			String event = createCourseEvent(user,course);
				if (!sentEvents.get(userKey).contains(event)){
					sendEvent(new BEvent("CourseAdded"), event);
					sentEvents.get(userKey).add(event);
				}
		}

		for (Course course : userWithEvents.courses){
			for(Assignment assignment : course.assignments){
				String event = createAssignmentEvent(course, assignment);
					if (!sentEvents.get(userKey).contains(event)){
						sendEvent(new BEvent("AssignmentAdded", event), event);
						sentEvents.get(userKey).add(event);
					}
				Date date = new Date();
				Date timemodified = new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy", Locale.US).parse(assignment.timemodified);
				Date duedate = new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy",  Locale.US).parse(assignment.duedate);
				long diffDuedate = TimeUnit.MINUTES.convert(duedate.getTime() - date.getTime(), TimeUnit.MILLISECONDS);
				long diffPublish = TimeUnit.MINUTES.convert(date.getTime() - timemodified.getTime(), TimeUnit.MILLISECONDS);

					if ( diffDuedate == 3600) {
						event = createAssignmentAlert24HoursEvent(course, assignment);
						sendEvent(new BEvent("Assignment24HoursAlert"), event);
					} else if (diffDuedate == 60) {
						event = createAssignmentAlert60MinEvent(course, assignment);
						sendEvent(new BEvent("Assignment60MinutesAlert"), event);
					} else if (diffDuedate == 10) {
						event = createAssignmentAlert10MinEvent(course, assignment);
						sendEvent(new BEvent("Assignment10MinutesAlert"), event);
					}
					if (diffPublish == diffDuedate) {
						event = createAssignmentAlertHalfTimeEvent(course, assignment);
						sendEvent(new BEvent("AssignmentHalfTimeAlert"), event);
					}
			}

			for(Resource resource : course.resources){
				String event = createResourceEvent(course, resource);
				if (sentEvents.containsKey(userKey)){
					if (!sentEvents.get(userKey).contains(event)){
						sendEvent(new BEvent("UnitAdded"), event);
						sentEvents.get(userKey).add(event);
					}
				}
			}

			for(Forum forum : course.forums){
				if(forum.name.equals("Announcements")){
					for(Message message : forum.messages){
						String event = createAnnouncementEvent(course, message);
							if (!sentEvents.get(userKey).contains(event)){
								sendEvent(new BEvent("AnnouncementAdded"), event);
								sentEvents.get(userKey).add(event);
							}
					}
				}else{
					for(Message message : forum.messages){
						String event = createForumEvent(course, forum, message);
							if (!sentEvents.get(userKey).contains(event)){
								sendEvent(new BEvent("ForumMessageAdded"), event);
								sentEvents.get(userKey).add(event);
							}
					}
				}
			}
		}
	}

	/**
	 * send event to backend
	 * @param event object
	 * @param eventStr object
	 */
	private void sendEvent(BEvent event, String eventStr) {
		String eventName = event.name;

		System.out.println("Sending to the backend event name - " + eventName);
		System.out.println(eventStr);
		try {
			String url = "http://localhost:8000/api/moodle/moodle-event/" + eventName;
			HttpClient client = new DefaultHttpClient();
			HttpPost post = new HttpPost(url);
			post.setEntity(new StringEntity(eventStr));
			post.setHeader("Content-type", "application/x-www-form-urlencoded");

			client.execute(post);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * create course event
	 * @param user object
	 * @param course object
	 * @return course event
	 */
	private String createCourseEvent(User user, Course course){
		return "{\"eventName\": \"Course\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"courseId\": \"" + course.id + "\"," +
				"\"userEmail\": \"" + user.email + "\"" +
				"}" +
				"}";
	}

	/**
	 * create assignment event
	 * @param course object
	 * @param assignment object
	 * @return assignment event
	 */
	private String createAssignmentEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"new_assignmnet\"," +
				"\"data\": {" +
				"\"AssignmentId\": \"" + assignment.id + "\"," +
				"\"CourseId\": \"" + course.id + "\"," +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"publishedDate\": \"" + assignment.timemodified + "\"," +
				"\"dueDate\": \"" + assignment.duedate + "\"" +
				"}" +
				"}";
	}

	/**
	 * create announcement event
	 * @param course object
	 * @param message object
	 * @return announcement event
	 */
	private String createAnnouncementEvent(Course course, Message message){
		return "{\"eventName\": \"Announcement\"," +
				"\"data\": {" +
				"\"messageId\": \"" + message.id + "\"," +
				"\"courseId\": \"" + course.id + "\"," +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"userName\": \"" + message.userfullname + "\"," +
				"\"subject\": \"" + message.subject + "\"," +
				"\"message\": \"" + message.message + "\"," +
				"\"publishedDate\": \"" + message.timemodified + "\"" +
				"}" +
				"}";
	}

	/**
	 * create forum message event
	 * @param course object
	 * @param forum object
	 * @param message object
	 * @return message event
	 */
	private String createForumEvent(Course course, Forum forum, Message message){
		return "{\"eventName\": \"Forum_Message\"," +
				"\"data\": {" +
				"\"messageId\": \"" + message.id + "\"," +
				"\"forumId\": \"" + forum.id + "\"," +
				"\"courseId\": \"" + course.id + "\"," +
				"\"userName\": \"" + message.userfullname + "\"," +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"forumName\": \"" + forum.name + "\"," +
				"\"subject\": \"" + message.subject + "\"," +
				"\"message\": \"" + message.message + "\"," +
				"\"publishedDate\": \"" + message.timemodified + "\"" +
				"}" +
				"}";
	}

	/**
	 * create resource event
	 * @param course object
	 * @param resource object
	 * @return resource event
	 */
	private String createResourceEvent(Course course, Resource resource){
		return "{\"eventName\": \"Unit\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"FileName\": \"" + resource.name + "\"," +
				"\"publishedDate\": \"" + resource.timemodified + "\"" +
				"}" +
				"}";
	}

	/**
	 * create assignment alert 24 hours to deadline event
	 * @param course object
	 * @param assignment object
	 * @return assignment alert 24 hours to deadline event
	 */
	private String createAssignmentAlert24HoursEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"Assignment_24_Hours_Alert\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"SubmissionStatus\": \"" + assignment.submission + "\"," +
				"\"deadline\": \"24 hours\"" +
				"}" +
				"}";
	}

	/**
	 * create assignment alert 60 minutes to deadline event
	 * @param course object
	 * @param assignment object
	 * @return assignment alert 60 minutes to deadline event
	 */
	private String createAssignmentAlert60MinEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"Assignment_60_Minutes_Alert\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"SubmissionStatus\": \"" + assignment.submission + "\"," +
				"\"deadline\": \"60 minutes\"" +
				"}" +
				"}";
	}

	/**
	 * create assignment alert 10 minutes to deadline event
	 * @param course object
	 * @param assignment object
	 * @return assignment alert 10 minutes to deadline event
	 */
	private String createAssignmentAlert10MinEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"Assignment_10_Minutes_Alert\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"SubmissionStatus\": \"" + assignment.submission + "\"," +
				"\"deadline\": \"10 minutes\"" +
				"}" +
				"}";
	}

	/**
	 * create assignment alert half time to deadline event
	 * @param course object
	 * @param assignment object
	 * @return assignment alert half time to deadline event
	 */
	private String createAssignmentAlertHalfTimeEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"Assignment_Half_Time_Alert\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"SubmissionStatus\": \"" + assignment.submission + "\"," +
				"\"deadline\": \"half of time\"" +
				"}" +
				"}";
	}

	/**
	 * create user event
	 * @param user object
	 * @return user event
	 */
	private String createUserEvent(User user){
		return "{\"eventName\": \"User\"," +
				"\"data\": {" +
				"\"userEmail\": \"" + user.email + "\"," +
				"\"userName\": \"" + user.username + "\"," +
				"\"userFirstName\": \"" + user.firstname + "\"," +
				"\"userLastName\": \"" + user.lastname + "\"" +
				"}" +
				"}";
	}


	@Override
	public void run() {
		try {
			pollMoodle("achiya");
		} catch (Throwable e) {
			System.out.println(e);
			// Do Nothing
		}
	}
}
