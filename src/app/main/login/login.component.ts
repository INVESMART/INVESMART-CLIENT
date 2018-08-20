import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations/index';
import {UserService} from "../services/user/user.service";

@Component({
    selector   : 'sysgep-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
    animations : fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;

    constructor(
        private fuseConfig: FuseConfigService,
        private formBuilder: FormBuilder,
        private _userService: UserService,
        private _router: Router
    )

    {
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar   : 'none'
            }
        });

        this.loginFormErrors = {
            user   : {},
            password: {},
            wrongUserOrPassWord: false,
            errorAtLogin: false
        };
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            user   : ['', Validators.required],
            password: ['', Validators.required]
        });
        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged() {
        for ( const field in this.loginFormErrors ) {
            if ( !this.loginFormErrors.hasOwnProperty(field) ) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            const control = this.loginForm.get(field);
            if ( control && control.dirty && !control.valid ) {
                this.loginFormErrors[field] = control.errors;
            }
        }
        this.loginFormErrors['wrongUserOrPassWord'] = false;
        this.loginFormErrors['errorAtLogin'] = false;
    }

    login() {
        // Error Mock
          if (this.loginForm.controls.user.value === 'MockError') {
              this.loginFormErrors['wrongUserOrPassWord'] = true;
          } else {
              if  (this._userService.login(this.loginForm.controls.user.value.toString(), this.loginForm.controls.password.value.toString())) {
                  // this._router.navigateByUrl('/home');
                  this._router.navigate(['/home']);
              } else {
                  this.loginFormErrors['errorAtLogin'] = true;
              }
          }
    }

}

