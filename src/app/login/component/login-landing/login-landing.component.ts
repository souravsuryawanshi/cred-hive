import {Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService, DBEnum, DbService, InterModuleNavigationService } from '../../../core';

@Component({
    selector : 'app-login',
    templateUrl : './login-landing.component.html',
    styleUrls: ['./login-landing.component.scss']
})

export class LoginLandingCompnent implements OnInit{
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);
    constructor(private _navigation : InterModuleNavigationService,
        private _dbService : DbService,
        private _userService : AccountService){

    }
    ngOnInit(): void {
        if(this._userService.isLoggedIn()){
            this._navigation.toDashboard();
        }
        let user = this._dbService.getData(DBEnum.USERNAME);
        if(user){
            this.email.setValue(user);
        }
        
    }
     getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'You must enter email id';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage(){
        if (this.password.hasError('required')) {
            return 'Please enter password';
          }
        return '';
    }
    onSubmit(){
        this._dbService.addData(DBEnum.USERNAME,this.email.value);
        this._dbService.addData(DBEnum.LOGIN,true);
        this._navigation.toDashboard();
    }
}