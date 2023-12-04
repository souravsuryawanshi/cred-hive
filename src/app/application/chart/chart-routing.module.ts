import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ChartComponent } from './component';

const routes : Routes = [{
    path : '',
    component : ChartComponent

}]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class ChartRoutingModule{
    
}