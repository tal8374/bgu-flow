package hackbgu.bgu.ac.il.services;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import hackbgu.bgu.ac.il.model.Assignment;
import hackbgu.bgu.ac.il.model.Submission;
import hackbgu.bgu.ac.il.model.User;
import hackbgu.bgu.ac.il.model.Users;

public class MoodleListener implements Runnable{
	private SerializationUtils serializationUtils = new SerializationUtils();
	private HashMap<String, List<String>> sentEvents = new HashMap<>();

   public void pollMoodle() throws Exception {
	   MoodleService moodleService = new MoodleServiceImpl();
	   List<User> allUsers = serializationUtils.deserialize(moodleService.getAllUsers(), Users.class).users;
	   for(User user: allUsers){
		   processUser(moodleService, user);
	   }
   }
   
   public static void main(String[] args){
	   final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
		scheduler.scheduleAtFixedRate(new MoodleListener(), 2, 10, TimeUnit.SECONDS);
   }

	private void processUser(MoodleService moodleService, User user) throws Exception {
		User userWithAssignments = serializationUtils.deserialize(moodleService.getUserWithAssignments(user.username), User.class);
		for (Assignment ass : userWithAssignments.assignments){
			for(Submission sub : ass.submissions){
				String event = createEvent(user, ass, sub);
				if (event != null){
					String userKey = "user"+user.id;
					if (sentEvents.containsKey(userKey)){
						if (sentEvents.get(userKey).contains(event)){
							continue;
						}
						sendEvent(event);
						sentEvents.get(userKey).add(event);
						continue;
					}
					
					sendEvent(event);
					List<String> userEvents = new ArrayList<>();
					userEvents.add(event);
					sentEvents.put(userKey, userEvents);
				}
			}
		}
	}
	
	private void sendEvent(String event) throws URISyntaxException {
		System.out.println("Sending event: " + event);
		final MoodleListenerEndpoint clientEndPoint = new MoodleListenerEndpoint(new URI("ws://bpcoders.elyasaf.net:8090/eventqueue"));

        // add listener
        clientEndPoint.addMessageHandler(new MoodleListenerEndpoint.MessageHandler() {
            public void handleMessage(String message) {
                System.out.println(message);
            }
        });

        // send message to websocket
        clientEndPoint.sendMessage(event);
	 }

	private String createEvent(User user, Assignment ass, Submission sub) {
		if (sub.gradingstatus.equals("notgraded")){
			return "{" + 
				"name: \"AssignmentAdded\", " + 
				"courseShortName: " + ass.courseShortName + ", " +
				"dueDate: " + ass.duedate + ", " +
				"attemptNumber: " + sub.attemptnumber + ", " +
				"gradingStatus: " + sub.gradingstatus +
			"}";
		}
		else{
			return null;
		}
	}

	@Override
	public void run() {
		try {
			pollMoodle();
		} catch (Throwable e) {
			System.out.println(e);
			// Do Nothing
		}
	}
}
