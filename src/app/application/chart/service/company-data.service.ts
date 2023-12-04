import {Injectable} from '@angular/core';
import { DATA } from '../../../constant';
import { of } from 'rxjs';

@Injectable()

export class CompanyDataService{
    getCompanyDate(){
        return of(DATA);
    }
}
