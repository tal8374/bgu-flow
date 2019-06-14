import {Component, OnInit} from '@angular/core';

import { Http } from '@angular/http';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    profile = {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    };

    constructor(private http: Http) {
        this.http.get('http://localhost:8000/api/db/users/achiya@gmail.com')
            .subscribe(res => {

                console.log(res['_body'])
                console.log(res)
                let body = JSON.parse(res['_body']);

                this.profile.userName = body['user_name'];
                this.profile.email = body['email'];
                this.profile.firstName = body['first_name'];
                this.profile.lastName = body['last_name'];
                this.profile.phoneNumber = body['phone_number'];
            })
    }

    ngOnInit() {
    }

    updateProfile() {
        this.http.put('http://localhost:8000/api/dashboard/user/email', this.profile)
            .subscribe(res => {

            })
    }
}
