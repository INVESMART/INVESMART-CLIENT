import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';

import { CalendarModule } from 'angular-calendar';
import { ColorPickerModule } from 'ngx-color-picker';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';

import { CalendarService } from '../../services/calendar/calendar.service';
import { FuseCalendarComponent } from './calendar.component';
//import { FuseCalendarEventFormDialogComponent } from './calendar-event-form/calendar-event-form.component';

const routes: Routes = [
    {
        path     : 'calendar',
        component: FuseCalendarComponent,
        children : [],
        resolve  : {
            chat: CalendarService
        }
    }
];

@NgModule({
    declarations   : [
        FuseCalendarComponent,
        //FuseCalendarEventFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSlideToggleModule,
        MatToolbarModule,

        CalendarModule.forRoot(),
        ColorPickerModule,

        FuseSharedModule,
        FuseConfirmDialogModule
    ],
    providers      : [
        CalendarService
    ]/*,
    entryComponents: [FuseCalendarEventFormDialogComponent]*/
})
export class SysgepCalendarModule {
}
