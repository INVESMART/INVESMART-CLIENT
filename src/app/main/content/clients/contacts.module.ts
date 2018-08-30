import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';

import { InvesmartContactsMainSidenavComponent } from './sidenavs/main/main.component';
import { InvesmartContactsComponent } from './contacts.component';
import { ClientsService } from '../../services/client/clients.service';
import { InvesmartContactsContactListComponent } from './contact-list/contact-list.component';
import { InvesmartContactsSelectedBarComponent } from './selected-bar/selected-bar.component';
import { InvesmartContactsContactFormDialogComponent } from './contact-form/contact-form.component';

const routes: Routes = [
    {
        path     : 'clients',
        component: InvesmartContactsComponent,
        resolve  : {
            contacts: ClientsService
        }
    }
];

@NgModule({
    declarations   : [
        InvesmartContactsComponent,
        InvesmartContactsContactListComponent,
        InvesmartContactsSelectedBarComponent,
        InvesmartContactsMainSidenavComponent,
        InvesmartContactsContactFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),
        CdkTableModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseConfirmDialogModule
    ],
    providers      : [
        ClientsService
    ],
    entryComponents: [InvesmartContactsContactFormDialogComponent]
})
export class InvesmartClientsModule
{
}
