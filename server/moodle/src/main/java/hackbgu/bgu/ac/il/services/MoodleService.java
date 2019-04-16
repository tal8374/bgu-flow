package hackbgu.bgu.ac.il.services;

import java.io.IOException;

public interface MoodleService {
	String listCoursesOfUser(String username) throws IOException, Exception;
	String getUser(String username) throws Exception;
	String getCourse(String courseId) throws Exception;
	String getAllUsers() throws IOException;
	String getUserEvents(String username) throws Exception;
//	String getForumsByCourses(String username) throws Exception;
//	String getAnnouncementsByCourses() throws Exception;
}
