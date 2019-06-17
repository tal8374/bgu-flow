import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

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

    constructor(private http: Http) {
        this.isAddingPartner = false;

        this.initCourses();
    }

    initCourses() {
        this.http.get('http://localhost:8000/api/db/userCourses/achiya@gmail.com')
            .map(res => res.json())
            .subscribe(res => {
                if (res.length > 0) {
                    this.onSelectCourse(res[0]);
                }

                this.courses = res;
            })
    }

    ngOnInit() {
    }

    onSelectCourse(course) {
        this.currentCourse = course;

        this.http.get('http://localhost:8000/api/db/coursePartners/2/achiya@gmail.com')
            .map(res => res.json())
            .subscribe(res => {
                console.log(res)

                this.courseTeamMembers = res;
            })
    }

    onAddPartner() {
        this.isAddingPartner = false;

        let body = {
            user_email: 'achiya@gmail.com',
            course: this.currentCourse['course_id'],
            partner_email: this.newPartnerEmail
        }

        let _this = this;

        this.http.post('http://localhost:8000/api/db/coursePartners/add', body)
            .subscribe(res => {
                _this.onSelectCourse(_this.currentCourse)
            })
    }

    onAddPartnerPlus() {
        this.isAddingPartner = true;
    }

    onStopAddPartner() {
        this.isAddingPartner = false;
    }
}
