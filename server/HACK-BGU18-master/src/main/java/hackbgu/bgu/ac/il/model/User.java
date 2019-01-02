package hackbgu.bgu.ac.il.model;

import java.util.List;

public class User {
	public String id;
	public String username;
	public String firstname;
	public String lastname;
	public String email;
	public List<String> courseIds;
	public List<String> courseIdNumbers;
	public String officehours;
	public List<Assignment> assignments;
}
