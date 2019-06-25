import { Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const router: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '',
        loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
        canLoad: [ AuthGuard ]
    },
    { path: '**', redirectTo: '' }
]