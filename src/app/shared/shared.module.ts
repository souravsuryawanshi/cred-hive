import { NgModule } from "@angular/core";
import { components, exports } from "./declaration";
import { CommonModule } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from "@angular/forms";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core'
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports : [ CommonModule, MatCardModule, MatSliderModule,MatDatepickerModule, FormsModule, MatNativeDateModule,MatFormFieldModule,MatInputModule, MatSelectModule ],
    declarations : components,
    providers : [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
    exports : exports
})

export class SharedModule{}