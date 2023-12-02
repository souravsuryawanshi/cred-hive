import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'app-date-range',
    templateUrl : './date-range.component.html',
    styleUrls : ['./date-range.component.scss']
})

export class DateRangeComponent{
    minDate = new Date(2023, 11, 1);
    maxDate = new Date(2023, 11, 7);
    startDate : string = ''
    endDate: string = '';
    @Output() dateRange = new EventEmitter();
    onDateSelect(e:any){
        if(this.startDate && this.endDate){
            this.dateRange.emit({
                startDate : this.startDate,
                endDate : this.endDate
            })
        }
    }
}