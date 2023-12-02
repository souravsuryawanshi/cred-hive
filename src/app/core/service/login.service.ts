import {Injectable} from '@angular/core';
import { DbService } from './db.service';

@Injectable({
    providedIn : 'root'
})

export class LoginService{
    constructor(private _dbService : DbService){

    }
    isLoggedIn(){
        return this._dbService.getData('login');
    }
}