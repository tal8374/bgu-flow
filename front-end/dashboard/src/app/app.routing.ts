import {Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {CourseComponent} from './course/course.component';
import {TableComponent} from './table/table.component';
import {FlowComponent} from './flow/flow.component';
import {IconsComponent} from './icons/icons.component';
import {LoginComponent} from './login/login.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'flow',
        component: FlowComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
