import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SelectType } from '../../model';

@Component({
    selector : 'app-select',
    templateUrl : './select.component.html',
    styleUrls : ['./select.component.scss']
})

export class SelectComponent implements OnInit, OnChanges{
    @Input() isCleared : boolean =  false;
    selectionValue : SelectType[] = [];
    optionValue : string = '';
      @Output() value = new EventEmitter();
      ngOnInit(){
        this._getValues();
      }
      ngOnChanges(){
       this.optionValue = '';
      }
      private _getValues(){
        this.selectionValue = [
            {value: 'open', viewValue: 'Open'},
            {value: 'closed', viewValue: 'Closed'},
          ];
      }
      onSelect(event : any){
         this.value.emit(event.value);
      }
}