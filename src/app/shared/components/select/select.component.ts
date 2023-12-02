import { Component, EventEmitter, Output } from '@angular/core';
import { SelectType } from '../../model';

@Component({
    selector : 'app-select',
    templateUrl : './select.component.html',
    styleUrls : ['./select.component.scss']
})

export class SelectComponent{
    selectionValue : SelectType[] = [
        {value: 'open', viewValue: 'Open'},
        {value: 'closed', viewValue: 'Closed'},
      ];
      @Output() value = new EventEmitter();
      
      onSelect(event : any){
         this.value.emit(event.value);
      }
}