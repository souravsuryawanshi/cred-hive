import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AccountService } from "./account.service";
import { InterModuleNavigationService } from "./inter-module-navigation.service";

@Injectable({
    providedIn : 'root'
})

export class AuthGuardService implements CanActivate{
    constructor(private _userService : AccountService, private _navigation : InterModuleNavigationService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this._userService.isLoggedIn()){
           this._navigation.toLogin();
           return false;
        }
        return true
    }
}