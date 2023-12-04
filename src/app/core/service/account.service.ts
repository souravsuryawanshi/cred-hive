import {Injectable} from '@angular/core';
import { DbService } from './db.service';
import { DBEnum } from '../enum';

@Injectable({
    providedIn : 'root'
})

export class AccountService{
    constructor(private _dbService : DbService){

    }
    saveToken(token : unknown){
      this._dbService.addData(DBEnum.LOGIN,token);
    }
    isLoggedIn(){
        return this._dbService.getData(DBEnum.LOGIN) || false
    }
   
}