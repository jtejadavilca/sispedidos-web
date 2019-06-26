import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        // loadChildren: './ingreso-egreso/ingreso-egreso.module#IngresoEgresoModule',
        loadChildren: './sispedidos-web/sispedidos-web.module#SispedidosWebModule',
        canLoad: [ AuthGuard ]
    },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
