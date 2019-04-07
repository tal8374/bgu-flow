import {Component, OnInit} from '@angular/core';

import { Http } from '@angular/http';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    profile = {
        userName: 'michael23',
        email: 'email@gmail.com',
        firstName: 'Chet',
        lastName: 'Faker',
    };

    constructor(private http: Http) {

    }

    ngOnInit() {
    }

    updateProfile() {
        this.http.put('http://localhost:8000/api/dashboard/user/email', this.profile)
            .subscribe(res => {

            })
    }
}
