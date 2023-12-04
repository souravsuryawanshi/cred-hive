import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { MatSliderDragEvent } from '@angular/material/slider';

@Component({
    selector : 'app-range',
    templateUrl : './range.component.html',
    styleUrls : ['./range.component.scss']
})

export class RangeComponent implements OnChanges{
   @Input() isCleared : boolean =  false;
    startValue : number = 0;
    endValue : number = 100;
    @Output() rangeSelector = new EventEmitter();
    ngOnChanges(){
      this.startValue = 0;
      this.endValue = 0;
    }
    onValueChange(event : any){
      this.rangeSelector.emit({
        startValue : this.startValue,
        endValue : this.endValue
      });
    }
}