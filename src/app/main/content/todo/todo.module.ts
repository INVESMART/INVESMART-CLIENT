import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { FuseSharedModule } from '@fuse/shared.module';

import { TodoService } from '../../services/todo/todo.service';
import { InvesmartTodoComponent } from './todo.component';
import { InvesmartTodoMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { InvesmartTodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { InvesmartTodoListComponent } from './todo-list/todo-list.component';
import { InvesmartTodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
    {
        path     : 'all',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'all/:todoId',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'tag/:tagHandle/:todoId',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path     : 'filter/:filterHandle/:todoId',
        component: InvesmartTodoComponent,
        resolve  : {
            todo: TodoService
        }
    },
    {
        path      : '**',
        redirectTo: 'all'
    }
];

@NgModule({
    declarations: [
        InvesmartTodoComponent,
        InvesmartTodoMainSidenavComponent,
        InvesmartTodoListItemComponent,
        InvesmartTodoListComponent,
        InvesmartTodoDetailsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,

        NgxDnDModule,

        FuseSharedModule,
    ],
    providers   : [
        TodoService
    ]
})
export class InvesmartTodoModule
{
}
