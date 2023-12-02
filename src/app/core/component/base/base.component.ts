import {Component, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector : 'app-base',
    template : ``,
})

export class BaseComponent implements OnDestroy{
    _destroy = new Subject();
    ngOnDestroy(): void {
        this._destroy.next(null);
        this._destroy.complete();
    }

}