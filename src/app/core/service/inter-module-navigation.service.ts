import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn :'root'
})

export class InterModuleNavigationService {
   constructor(private _router : Router){

   }
   toDashboard(){
    this._router.navigateByUrl('/dashboard');
   }
   toCompanyDetails(companyName : string | undefined){
    this._router.navigate(['/dashboard/company-details'],{
        queryParams : {
            id : companyName
        }
    })
   }
   toCharts(){
    this._router.navigateByUrl('/dashboard/charts');
   }
   toLogin(){
    this._router.navigateByUrl('');
   }
}