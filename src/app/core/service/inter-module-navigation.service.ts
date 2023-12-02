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
   toLogin(){
    this._router.navigateByUrl('');
   }
}