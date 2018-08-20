import {NgModule} from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import {RouterModule} from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {LoginComponent} from './login.component';

const routes = [
  {
      path     : 'login',
      component: LoginComponent
  }
];

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports     : [
      FuseSharedModule,
      MatButtonModule,
      MatCheckboxModule,
      MatFormFieldModule,
      MatInputModule,
      RouterModule.forChild(routes)
  ]
})

export class LoginModule {

}
