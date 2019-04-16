package hackbgu.bgu.ac.il.services;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import hackbgu.bgu.ac.il.model.*;


import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.google.gson.Gson;
import il.ac.bgu.cs.bp.bpjs.execution.listeners.BProgramRunnerListenerAdapter;
import il.ac.bgu.cs.bp.bpjs.model.BEvent;
import org.apache.commons.io.IOUtils;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;

import com.mxgraph.io.mxCodec;
import com.mxgraph.model.mxCell;
import com.mxgraph.model.mxGraphModel;
import com.mxgraph.model.mxGraphModel.Filter;
import com.mxgraph.util.mxXmlUtils;

import il.ac.bgu.cs.bp.bpjs.execution.BProgramRunner;
import il.ac.bgu.cs.bp.bpjs.execution.listeners.PrintBProgramRunnerListener;
import il.ac.bgu.cs.bp.bpjs.model.BProgram;

public class MoodleListener implements Runnable{
	private SerializationUtils serializationUtils = new SerializationUtils();
	private HashMap<String, List<String>> sentEvents = new HashMap<>();

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

	private void processUser(MoodleService moodleService, User user) throws Exception {
		User userWithEvents = serializationUtils.deserialize(moodleService.getUserEvents(user.username), User.class);
//		for (Assignment ass : userWithEvents.assignments){
//			for(Submission sub : ass.submissions){
//				String event = createAssignmentEvent(ass, sub);
//				if (event != null){
//					String userKey = "user"+user.id;
//					if (sentEvents.containsKey(userKey)){
//						if (sentEvents.get(userKey).contains(event)){
//							continue;
//						}
//						sendEvent(new BEvent("AssigmentAdded", event));
//						sentEvents.get(userKey).add(event);
//						continue;
//					}
//
//					sendEvent(new BEvent("AssigmentAdded", event));
//					List<String> userEvents = new ArrayList<>();
//					userEvents.add(event);
//					sentEvents.put(userKey, userEvents);
//				}
//			}
//		}
		for (Course course : userWithEvents.courses) {

			String event = createCourseEvent(course);
			String userKey = "user"+user.username;
			if (sentEvents.containsKey(userKey)){
				if (!sentEvents.get(userKey).contains(event)){
					sendEvent(new BEvent("CourseAdded"), event);
					sentEvents.get(userKey).add(event);
				}
				continue;
			}

			sendEvent(new BEvent("CourseAdded"), event);
			List<String> userEvents = new ArrayList<>();
			userEvents.add(event);
			sentEvents.put(userKey, userEvents);
		}

		for (Course course : userWithEvents.courses){
			for(Assignment assignment : course.assignments){
				String event = createAssignmentEvent(course, assignment);
				String userKey = "user"+user.username;
				if (sentEvents.containsKey(userKey)){
					if (!sentEvents.get(userKey).contains(event)){
						sendEvent(new BEvent("AssignmentAdded", event), event);
						sentEvents.get(userKey).add(event);
					}

//					continue;
				}

//				sendEvent(new BEvent("AssignmentAdded", event));
//				List<String> userEvents = new ArrayList<>();
//				userEvents.add(event);
//				sentEvents.put(userKey, userEvents);
			}

			for(Resource resource : course.resources){
				String event = createResourceEvent(course, resource);
				String userKey = "user"+user.username;
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
						String userKey = "user"+user.username;
						if (sentEvents.containsKey(userKey)){
							if (!sentEvents.get(userKey).contains(event)){
								sendEvent(new BEvent("AnnouncementAdded"), event);
								sentEvents.get(userKey).add(event);
							}
//							continue;
						}

//						sendEvent(new BEvent("AnnouncementAdded", event));
//						List<String> userEvents = new ArrayList<>();
//						userEvents.add(event);
//						sentEvents.put(userKey, userEvents);
					}
				}else{
					for(Message message : forum.messages){
						String event = createForumEvent(course, forum, message);
						String userKey = "user"+user.username;
						if (sentEvents.containsKey(userKey)){
							if (!sentEvents.get(userKey).contains(event)){
								sendEvent(new BEvent("ForumMessageAdded"), event);
								sentEvents.get(userKey).add(event);
							}
//							continue;
						}

//						sendEvent(new BEvent("ForumMessageAdded", event));
//						List<String> userEvents = new ArrayList<>();
//						userEvents.add(event);
//						sentEvents.put(userKey, userEvents);
					}
				}

//				String event = createAssignmentEvent(ass, sub);
//				if (event != null){
//					String userKey = "user"+user.id;
//					if (sentEvents.containsKey(userKey)){
//						if (sentEvents.get(userKey).contains(event)){
//							continue;
//						}
//						sendEvent(new BEvent("AssigmentAdded", event));
//						sentEvents.get(userKey).add(event);
//						continue;
//					}
//
////					sendEvent(new BEvent("AssigmentAdded", event));
//					List<String> userEvents = new ArrayList<>();
//					userEvents.add(event);
//					sentEvents.put(userKey, userEvents);
//				}
			}
		}
	}

	private void sendEvent(BEvent event, String eventStr) {
		String eventName = event.name;

		System.out.println("Sending to the backend event name - " + eventName);
		System.out.println(eventStr);
		try {
			String url = "http://localhost:8000/api/moodle/moodle-event/" + eventName;
			HttpClient client = new DefaultHttpClient();
			HttpPost post = new HttpPost(url);

//			ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
//			String json = ow.writeValueAsString(eventStr);
//			StringEntity postingString = new StringEntity(json);

//			System.out.println("here");
//			System.out.println(postingString);
//			String s = "{\"eventName\": \"Forum_Message\",\"data\": {\"selectedCourse\": \"Database\"}}";
//			StringEntity s2 = new StringEntity(s);

			post.setEntity(new StringEntity(eventStr));
			post.setHeader("Content-type", "application/x-www-form-urlencoded");

			client.execute(post);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

//	private void sendEvent(String event) throws URISyntaxException {
//		System.out.println("Sending event: " + event);
//		final MoodleListenerEndpoint clientEndPoint = new MoodleListenerEndpoint(new URI("ws://bpcoders.elyasaf.net:8090/eventqueue"));
//
//        // add listener
//        clientEndPoint.addMessageHandler(new MoodleListenerEndpoint.MessageHandler() {
//            public void handleMessage(String message) {
//                System.out.println(message);
//            }
//        });
//
//        // send message to websocket
//        clientEndPoint.sendMessage(event);
//	 }

	private String createCourseEvent(Course course){
		return "{\"eventName\": \"Course\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"courseId\": \"" + course.id + "\"" +
				"}" +
				"}";
	}

	private String createAssignmentEvent(Course course, Assignment assignment) {
		return "{\"eventName\": \"Assignment\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"AssignmentName\": \"" + assignment.name + "\"," +
				"\"publishedDate\": \"" + assignment.timemodified + "\"," +
				"\"dueDate\": \"" + assignment.duedate + "\"" +
				"}" +
				"}";
	}

	private String createAnnouncementEvent(Course course, Message message){
		return "{\"eventName\": \"Announcement\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"userName\": \"" + message.userfullname + "\"," +
				"\"subject\": \"" + message.subject + "\"," +
				"\"message\": \"" + message.message + "\"," +
				"\"publishedDate\": \"" + message.timemodified + "\"" +
				"}" +
				"}";
	}

	private String createForumEvent(Course course, Forum forum, Message message){
		return "{\"eventName\": \"Forum_Message\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"forumName\": \"" + forum.name + "\"," +
				"\"subject\": \"" + message.subject + "\"," +
				"\"message\": \"" + message.message + "\"," +
				"\"publishedDate\": \"" + message.timemodified + "\"" +
				"}" +
				"}";
	}

	private String createResourceEvent(Course course, Resource resource){
		return "{\"eventName\": \"Unit\"," +
				"\"data\": {" +
				"\"selectedCourse\": \"" + course.fullname + "\"," +
				"\"FileName\": \"" + resource.name + "\"," +
				"\"publishedDate\": \"" + resource.timemodified + "\"" +
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
