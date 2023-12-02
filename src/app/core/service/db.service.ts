import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})

export class DbService {

    constructor() {
    }



  clear() {
         if(localStorage) {
            localStorage.clear();
         }
    }

  getData(key: string) {
        return  localStorage.getItem(key) || '';
    }

   addData<T>(key:string,data: any)  {
         localStorage.setItem(key,data);
    }

   remove(key: string) {
         localStorage.removeItem(key);
    }
}