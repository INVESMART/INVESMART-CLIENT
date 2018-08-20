import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';

import { fuseConfig } from './fuse-config';

import { AppComponent } from './app.component';
import { SysgepMainModule } from './main/main.module';
import { HomeModule } from './main/content/home/home.module';
import {LoginModule} from "./main/login/login.module";
import {UserService} from "./main/services/user/user.service";
import {CalendarModule} from "angular-calendar";
import {SysgepCalendarModule} from "./main/content/calendar/calendar.module";

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'login'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),

        // Fuse Main and Shared modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        SysgepMainModule,
        HomeModule,
        SysgepCalendarModule,
        LoginModule
    ],
    providers    : [
        UserService
    ],
    bootstrap    : [
        AppComponent
    ]
})
export class AppModule {
}
