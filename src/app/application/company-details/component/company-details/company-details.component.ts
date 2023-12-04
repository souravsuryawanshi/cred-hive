import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs';
import { BaseComponent, InterModuleNavigationService } from '../../../../core';
import { CompanyDetailsService } from '../../service';


@Component({
    selector : 'app-company-details',
    templateUrl : './company-details.component.html',
    styleUrls : ['./company-details.component.scss']
})

export class CompanyDetailsComponent extends BaseComponent implements OnInit{
    cardData : any = {};
    imageIdentifier : string | undefined = '';
    keys : string[] = [];
   
    constructor( private activatedRoute: ActivatedRoute,private _navigation : InterModuleNavigationService,
        private _companyData : CompanyDetailsService){
        super();
    }
    ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(takeUntil(this._destroy)).subscribe(params => {
            const id = params['id'];
            if(id < 0){
              this._navigation.toDashboard();
            }
            else{
                this.imageIdentifier = id;
                this._getData();
           }
          });
         
    }
    private _getData(){
      this._companyData.getCompanyDetails(this.imageIdentifier).pipe(take(1)).subscribe((data)=>{
        this.cardData = data;
        this._getKeys(this.cardData);
      },
      error=>{
        console.log(error)
      })
    }
   
    private _getKeys(cardObj : any ){
      this.keys = Object.keys(cardObj);
    }
    getImage(){
        return `https://source.unsplash.com/random/200x200?sig=${this.imageIdentifier}`;
    }
    
}