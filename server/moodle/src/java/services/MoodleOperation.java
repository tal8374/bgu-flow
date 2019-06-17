package services;

public enum MoodleOperation {
	listUserCourses("core_enrol_get_users_courses"),
	getCourses("core_course_get_courses_by_field"),
	getUserByField("core_user_get_users_by_field"),
	getAssignmentsByCourse("mod_assign_get_assignments"),
	getAssignmentStatus("mod_assign_get_submission_status"),
//	getSubmissionsForAssignment("mod_assign_get_submissions"),
	getAllUsers("core_user_get_users"),
	getForumsCourse("mod_forum_get_forums_by_courses"),
	getMessagesByCourses("mod_forum_get_forum_discussions_paginated"),
	getResourcesCourse("mod_resource_get_resources_by_courses");

	private String operation;
	private MoodleOperation(String op){
		this.operation = op;
	}

	public String getOperation() {
		return operation;
	}
}
