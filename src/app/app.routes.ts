import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'dashboard',
        loadChildren : () => import('./application/dashboard').then(m => m.DashboardModule)
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
