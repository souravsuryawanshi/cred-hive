import {Component, OnInit} from '@angular/core';
import { BaseComponent, DBEnum, DbService, InterModuleNavigationService } from '../../../../core';
import { CompanyData, FilterCriteria } from '../../model';
import { CompanyDataService } from '../../service';
import { take } from 'rxjs';

@Component({
    selector : 'app-home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.scss']
})

export class HomeComponent extends BaseComponent implements OnInit{
    data : CompanyData[] = [];
    userName : string = 'CredHive User';
    filterCriteria : FilterCriteria = {};
    constructor(private _dataService : CompanyDataService
        ,private _dbService : DbService,
        private _navigation : InterModuleNavigationService){
        super();
    }

    ngOnInit(): void {
        this._getUsername();
        this._getData();
    }
    private _getUsername(){
        this.userName = this._dbService.getData(DBEnum.USERNAME);
    }
    private _getData(){
        this._dataService.getData().pipe(take(1)).subscribe((data : CompanyData[])=>{
          this.data = data;
          this.filterCriteria = new FilterCriteria();
        },
        (error)=>{
          console.log(error);
        });
    }
    onApplyFilters(){
       this.data = this._dataService.filterData(this.filterCriteria);
    }
    onLogout(){
     this._dbService.remove(DBEnum.LOGIN);
     this._navigation.toLogin();
    }
    onAccountSelect(event : string){
      this.filterCriteria.accountType = event;
      this.filterCriteria.filterAdded = true;
    }
    onDateRangeSelect(event : any){
        this.filterCriteria.startDate = event.startDate;
        this.filterCriteria.endDate = event.endDate;
        this.filterCriteria.filterAdded = true;
    }
    onClear(){
        this.filterCriteria.filterAdded = false;
        this._getData();
    }
    onLoanRangeSelect(event : any){
        this.filterCriteria.loanLowerLimit = event.startValue;
        this.filterCriteria.loanUpperLimit = event.endValue;
        this.filterCriteria.filterAdded = true;
    }

}