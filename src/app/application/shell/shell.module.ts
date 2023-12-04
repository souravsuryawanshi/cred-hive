import {NgModule} from '@angular/core';
import { ShellRoutingModule } from './shell-routing.module';
import { components, providers } from './declaration';

@NgModule({
    declarations : components,
    imports : [ShellRoutingModule],
    exports : [],
    providers : providers
})

export class ShellModule{}