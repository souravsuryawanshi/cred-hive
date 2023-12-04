import { Injectable } from "@angular/core";
import { DATA } from "../../../constant";
import { of } from "rxjs";

@Injectable()

export class CompanyDetailsService{
 
    getCompanyDetails(companyName : string | undefined){
       let result = {};
       result = DATA?.filter((item)=>item.companyName === companyName)?.[0] || {};
       return of(result);
    }

}