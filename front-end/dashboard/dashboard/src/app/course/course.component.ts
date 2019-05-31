import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'course-cmp',
    moduleId: module.id,
    templateUrl: 'course.component.html'
})

export class CourseComponent implements OnInit {
    courses;
    currentCourse;
    courseTeamMembers;
    isAddingPartner;
    newPartnerEmail;

    constructor() {
        this.courses = ['Course 1', 'Course 2', 'Course 3', 'Course 4', 'Course 5'];
        this.courseTeamMembers = ['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4'];
        this.currentCourse = this.courses[0];
        this.isAddingPartner = false;
    }

    ngOnInit() {
    }

    onSelectCourse(course) {
        this.currentCourse = course;
    }

    onAddPartner() {
        this.isAddingPartner = false;
        this.courseTeamMembers.push(this.newPartnerEmail)
    }

    onAddPartnerPlus() {
        this.isAddingPartner = true;
    }

    onStopAddPartner() {
        this.isAddingPartner = false;
    }
}
