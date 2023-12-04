import { NgModule } from "@angular/core";
import { components, providers } from "./declaration";
import { CommonModule } from "@angular/common";
import { NgChartsModule } from "ng2-charts";
import { ChartRoutingModule } from "./chart-routing.module";

@NgModule({
    declarations : components,
    imports : [CommonModule, NgChartsModule, ChartRoutingModule],
    providers : providers
})

export class ChartModule{

}