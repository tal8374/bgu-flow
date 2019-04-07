import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {NguiMapModule} from '@ngui/map';

import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {CourseComponent} from './course/course.component';
import {TableComponent} from './table/table.component';
import {FlowComponent} from './flow/flow.component';
import {IconsComponent} from './icons/icons.component';
import {LoginComponent} from './login/login.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        UserComponent,
        CourseComponent,
        TableComponent,
        FlowComponent,
        IconsComponent,
        LoginComponent,
        NotificationsComponent,
        UpgradeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        HttpModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        FormsModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
