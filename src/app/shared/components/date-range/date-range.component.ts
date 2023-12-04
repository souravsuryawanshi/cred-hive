import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector : 'app-date-range',
    templateUrl : './date-range.component.html',
    styleUrls : ['./date-range.component.scss']
})

export class DateRangeComponent implements OnChanges{
    @Input() isCleared : boolean =  false;
    minDate = new Date(2023, 11, 1);
    maxDate = new Date(2023, 11, 7);
    startDate : string = ''
    endDate: string = '';
    @Output() dateRange = new EventEmitter();
    ngOnChanges(){
        this.startDate = '',
        this.endDate = ''
    }
    onDateSelect(e:any){
        if(this.startDate && this.endDate){
            this.dateRange.emit({
                startDate : this.startDate,
                endDate : this.endDate
            })
        }
    }
}