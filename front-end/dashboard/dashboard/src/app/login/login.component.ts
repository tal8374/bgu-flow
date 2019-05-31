import { Component,OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    constructor(private http: Http){}

    loginData = {
        email: '',
        password: ''
    };

    ngOnInit() {

    }

    login() {
        this.http.post('http://localhost:8000/api/dashboard/login', this.loginData)
            .subscribe(res => {

            })
    }
}
