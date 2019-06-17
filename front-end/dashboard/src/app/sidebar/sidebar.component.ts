import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
    { path: 'login', title: 'Login',  icon:'ti-user', class: '' },
    { path: 'course', title: 'Course',  icon:'ti-pencil-alt2', class: '' },
    { path: 'flow', title: 'Flow',  icon:'ti-text', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
