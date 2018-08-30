import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSidenavModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { InvesmartAcademyCoursesComponent } from './courses/courses.component';
import { InvesmartAcademyCourseComponent } from './course/course.component';
import { AcademyCoursesService } from '../../services/course/courses.service';
import { AcademyCourseService } from '../../services/course/course.service';

const routes = [
    {
        path     : 'courses',
        component: InvesmartAcademyCoursesComponent,
        resolve  : {
            academy: AcademyCoursesService
        }
    },
    {
        path     : 'courses/:courseId/:courseSlug',
        component: InvesmartAcademyCourseComponent,
        resolve  : {
            academy: AcademyCourseService
        }
    }/*,
    {
        path      : '**',
        redirectTo: 'courses'
    }*/
];

@NgModule({
    declarations: [
        InvesmartAcademyCoursesComponent,
        InvesmartAcademyCourseComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule,

        FuseSharedModule
    ],
    providers   : [
        AcademyCoursesService,
        AcademyCourseService
    ]
})
export class InvesmartCourseModule
{
}
