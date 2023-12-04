import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './component';

const routes : Routes = [{
    path : '',
    component : ShellComponent,
    children : [
        {
        path : '',
        loadChildren : ()=>import('../dashboard').then(_=>_.DashboardModule)
    },
    {
        path : 'company-details',
        loadChildren : ()=> import('../company-details').then(_=>_.CompanyDetailsModule)
    },
    {
        path : 'charts',
        loadChildren : ()=> import('../chart').then(_=>_.ChartModule)
    }
]
}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ShellRoutingModule{}