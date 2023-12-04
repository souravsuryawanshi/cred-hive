import { NgModule } from "@angular/core";
import { components, providers } from "./declaration";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared";
import { CompanyDetailsRoutingModule } from "./company-details-routing.module";
import {MatCardModule} from '@angular/material/card';
@NgModule({
    declarations : components,
    imports : [CommonModule, SharedModule, CompanyDetailsRoutingModule, MatCardModule],
    exports : [],
    providers : providers
})

export class CompanyDetailsModule{

}