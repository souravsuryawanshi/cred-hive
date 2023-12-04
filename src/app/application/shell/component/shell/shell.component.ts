import {Component, OnInit} from '@angular/core';
import { DBEnum, DbService, InterModuleNavigationService } from '../../../../core';

@Component({
    selector : 'app-shell',
    templateUrl : './shell.component.html',
    styleUrls : ['./shell.component.scss']
})

export class ShellComponent implements OnInit{
    userName : string = 'CredHive User';
    constructor(private _dbService : DbService, private _navigation : InterModuleNavigationService){
        
    }
    ngOnInit(){
        this._getUsername();
    }
    private _getUsername(){
        this.userName = this._dbService.getData(DBEnum.USERNAME);
    }
    onLogout(){
        this._dbService.remove(DBEnum.LOGIN);
        this._navigation.toLogin();
       }

    toDashboard(){
        this._navigation.toDashboard();
    }
    toGraph(){
        this._navigation.toCharts();
    }
}