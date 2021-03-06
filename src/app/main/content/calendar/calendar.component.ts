import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { MatDialog, MatDialogRef } from '@angular/material';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';

import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarMonthViewDay } from 'angular-calendar';

import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';

//import { FuseCalendarEventFormDialogComponent } from './calendar-event-form/calendar-event-form.component';
import { CalendarEventModel } from '../../model/calendar/calendarEventModel';
import { CalendarService } from '../../services/calendar/calendar.service';

@Component({
    selector     : 'sysgep-calendar',
    templateUrl  : './calendar.component.html',
    styleUrls    : ['./calendar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseCalendarComponent implements OnInit
{
    view: string;
    viewDate: Date;
    events: CalendarEventModel[];
    public actions: CalendarEventAction[];
    activeDayIsOpen: boolean;
    refresh: Subject<any> = new Subject();
    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
    selectedDay: any;

    constructor(
        public dialog: MatDialog,
        public calendarService: CalendarService
    )
    {
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = {date: startOfDay(new Date())};

        this.actions = [
            {
                label  : '<i class="material-icons s-16">edit</i>',
                onClick: ({event}: { event: CalendarEventModel }): void => {
                    this.editEvent('edit', event);
                }
            },
            {
                label  : '<i class="material-icons s-16">delete</i>',
                onClick: ({event}: { event: CalendarEventModel }): void => {
                    this.deleteEvent(event);
                }
            }
        ];

        /**
         * Get events from service/server
         */
        this.setEvents();
    }

    ngOnInit()
    {
        /**
         * Watch re-render-refresh for updating db
         */
        /*
        this.refresh.subscribe(updateDB => {
            // console.warn('REFRESH');
            if ( updateDB )
            {
                // console.warn('UPDATE DB');
                this.calendarService.updateEvents(this.events);
            }
        });

        this.calendarService.onEventsUpdated.subscribe(events => {
            this.setEvents();
            this.refresh.next();
        });
        */
    }

    setEvents()
    {
        /*this.events = this.calendarService.events.map(item => {
            item.actions = this.actions;
            return new CalendarEventModel(item);
        });*/
    }

    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    beforeMonthViewRender({header, body})
    {
        // console.info('beforeMonthViewRender');
        /**
         * Get the selected day
         */
        const _selectedDay = body.find((_day) => {
            return _day.date.getTime() === this.selectedDay.date.getTime();
        });

        if ( _selectedDay )
        {
            /**
             * Set selectedday style
             * @type {string}
             */
            _selectedDay.cssClass = 'mat-elevation-z3';
        }

    }

    /**
     * Day clicked
     * @param {MonthViewDay} day
     */
    dayClicked(day: CalendarMonthViewDay): void
    {
        const date: Date = day.date;
        const events: CalendarEventModel[] = day.events;

        if ( isSameMonth(date, this.viewDate) )
        {
            if ( (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 )
            {
                this.activeDayIsOpen = false;
            }
            else
            {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    }

    /**
     * Event times changed
     * Event dropped or resized
     * @param {CalendarEventModel} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void
    {
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    }

    /**
     * Delete Event
     * @param event
     */
    deleteEvent(event)
    {
        this.confirmDialogRef = this.dialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                const eventIndex = this.events.indexOf(event);
                this.events.splice(eventIndex, 1);
                this.refresh.next(true);
            }
            this.confirmDialogRef = null;
        });

    }

    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEventModel} event
     */
    editEvent(action: string, event: CalendarEventModel)
    {
        /*const eventIndex = this.events.indexOf(event);

        this.dialogRef = this.dialog.open(FuseCalendarEventFormDialogComponent, {
            panelClass: 'event-form-dialog',
            data      : {
                event : event,
                action: action
            }
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Save
                     *//*
                    case 'save':

                        this.events[eventIndex] = Object.assign(this.events[eventIndex], formData.getRawValue());
                        this.refresh.next(true);

                        break;
                    /**
                     * Delete
                     *//*
                    case 'delete':

                        this.deleteEvent(event);

                        break;
                }
            });*/
    }

    /**
     * Add Event
     */
    addEvent(): void
    {
        /*this.dialogRef = this.dialog.open(FuseCalendarEventFormDialogComponent, {
            panelClass: 'event-form-dialog',
            data      : {
                action: 'new',
                date  : this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                const newEvent = response.getRawValue();
                newEvent.actions = this.actions;
                this.events.push(newEvent);
                this.refresh.next(true);
            });*/
    }
}


