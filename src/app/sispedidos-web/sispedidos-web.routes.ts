import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Routes } from '@angular/router';

export const sispedidosWebdRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'usuarios', component: UsuariosComponent }
];
