import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginLandingCompnent } from './component';

const routes : Routes = [{
   path : '',
   component : LoginLandingCompnent
}
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class LoginRoutingModule{

}