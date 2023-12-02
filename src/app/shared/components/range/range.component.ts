import {Component, EventEmitter, Output} from '@angular/core';
import { MatSliderDragEvent } from '@angular/material/slider';

@Component({
    selector : 'app-range',
    templateUrl : './range.component.html',
    styleUrls : ['./range.component.scss']
})

export class RangeComponent{
    startValue : number = 0;
    endValue : number = 100;
    @Output() rangeSelector = new EventEmitter();
    onValueChange(event : any){
      this.rangeSelector.emit({
        startValue : this.startValue,
        endValue : this.endValue
      });
    }
}