import { Routes } from '@angular/router';
import { AuthGuardService } from './core/service/guard.service';

export const routes: Routes = [
    {
        path : 'dashboard',
        loadChildren : () => import('./application/shell').then(m => m.ShellModule),
        canActivate : [AuthGuardService]
    },
    {
        path : '',
        loadChildren : () => import('../app/login').then(_=>_.LoginModule)
    },
    {
        path : '**',
        redirectTo : '',
        pathMatch : 'full'
    }
];
