import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { components, exports, services } from "./declaration";

@NgModule({
    imports : [CommonModule],
    declarations : components,
    providers : services,
    exports : exports
})

export class CoreModule{

}