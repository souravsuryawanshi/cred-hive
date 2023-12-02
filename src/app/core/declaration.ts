import { BaseComponent } from "./component";
import { AccountService, DbService, InterModuleNavigationService, LoginService } from "./service";

export const components  = [BaseComponent];

export const services = [AccountService, LoginService, DbService, InterModuleNavigationService];

export const exports = [BaseComponent];