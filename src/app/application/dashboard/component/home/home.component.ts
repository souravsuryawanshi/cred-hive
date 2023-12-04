import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import { BaseComponent, InterModuleNavigationService } from '../../../../core';
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
    filterCriteria : FilterCriteria = {};
    isCleared : boolean =  false;
    constructor(private _dataService : CompanyDataService,
        private _navigation : InterModuleNavigationService,
        private el : ElementRef,
        private r2 : Renderer2
        ){
        super();
    }

    ngOnInit(): void {
        this._getData();
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
       this.isCleared = false;
       this.data = this._dataService.filterData(this.filterCriteria);
    //    if(this.toggle){
    //     this.toggle = false;
    //     this.displayFilters();
    //    }
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
        this.isCleared = true;
        // if(this.toggle){
        //     this.toggle = false;
        //     this.displayFilters();
        //    }
    }
    onLoanRangeSelect(event : any){
        this.filterCriteria.loanLowerLimit = event.startValue;
        this.filterCriteria.loanUpperLimit = event.endValue;
        this.filterCriteria.filterAdded = true;
    }
    toCompanyDetail(companyName : string | undefined){
       this._navigation.toCompanyDetails(companyName);
    }
    // displayFilters(){
    //     const filterDiv = this.el.nativeElement.querySelector('.filters');
    //     if(this.toggle){
    //      this.r2.setStyle(filterDiv,'display','block');
    //     }
    //     else{
    //         this.r2.setStyle(filterDiv,'display','none');
    //     }
    // }

}