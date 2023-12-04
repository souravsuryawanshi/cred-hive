import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CompanyDetailsComponent } from './component';

const routes : Routes = [
{
    path : '',
    component : CompanyDetailsComponent
}
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class CompanyDetailsRoutingModule{

}