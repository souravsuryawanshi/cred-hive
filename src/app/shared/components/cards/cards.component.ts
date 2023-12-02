import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector : 'app-card',
    templateUrl : './cards.component.html',
    styleUrls : ['./cards.component.scss']
})

export class CardComponent implements OnInit{
    @Input() cardData : any = {};
    @Input() imageIdentifier : number = 0;
    keys : string[] = [];
   
    
    ngOnInit(): void {
        this._getKeys(this.cardData);
    }
    private _getKeys(cardObj : any ){
      this.keys = Object.keys(cardObj);
    }
    getImage(){
        return `https://source.unsplash.com/random/200x200?sig=${this.imageIdentifier}`;
    }
}