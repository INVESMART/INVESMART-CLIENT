import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ClientsService } from '../../../../services/clients/clients.service';

@Component({
    selector   : 'invesmart-contacts-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class InvesmartContactsMainSidenavComponent implements OnDestroy
{
    user: any;
    filterBy: string;
    
    onUserDataChangedSubscription: Subscription;

    constructor(private contactsService: ClientsService)
    {
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(user => {
                this.user = user;
            });
    }

    changeFilter(filter)
    {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    }

    ngOnDestroy()
    {
        this.onUserDataChangedSubscription.unsubscribe();
    }
}
