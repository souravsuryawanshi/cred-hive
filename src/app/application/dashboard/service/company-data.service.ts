import {Injectable } from '@angular/core';
import { DATA } from '../constant/data.constant';
import { of } from 'rxjs';
import { CompanyData, FilterCriteria } from '../model';

@Injectable()

export class CompanyDataService{
    constructor(){

    }
    getData(){
        return of(DATA);
    }
    filterData(filterCriteria : FilterCriteria){
      return DATA?.filter((data)=>{
        return (this._loanLimit(data,filterCriteria) && this._dateCriteria(data,filterCriteria) && this._accountCriteria(data,filterCriteria))
      })
    }
    private _loanLimit(data : CompanyData, filterCriteria : FilterCriteria ){
       let result = true;
        if(data.loanAmount !== undefined && filterCriteria.loanLowerLimit !==undefined &&  filterCriteria.loanLowerLimit !==null  && filterCriteria.loanUpperLimit !==undefined && filterCriteria.loanUpperLimit !==null){
            if(data.loanAmount >= filterCriteria.loanLowerLimit && data.loanAmount <= filterCriteria.loanUpperLimit){
                result = true;
            }
            else{
               result = false;
            }
        }
      return result;
    }
    private _dateCriteria(data : CompanyData, filterCriteria : FilterCriteria ){
        if(data.registrationDate && filterCriteria.startDate && filterCriteria.endDate){
            let startDate = new Date(filterCriteria.startDate);
            let endDate = new Date(filterCriteria.endDate);
            let companyDate = new Date(data.registrationDate);
            if(companyDate >= startDate && companyDate <=endDate){
                return true;
            }
            else{
                return false;
            }
        }
      return true;
    }
    private _accountCriteria(data : CompanyData, filterCriteria : FilterCriteria ){
      if(data?.accountStatus && filterCriteria.accountType){
        if(data.accountStatus === filterCriteria.accountType){
            return true;
        }
        else{
            return false;
        }
      }
      return true;
    }
}