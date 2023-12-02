import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { components, providers } from "./declaration";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../../shared";

@NgModule({
    imports : [CommonModule, DashboardRoutingModule, SharedModule],
    declarations : components,
    providers : providers,
})

export class DashboardModule{
    
}