import { Routes } from '@angular/router';

import { EstadisticasComponent } from '../estadisticas/estadisticas.component';
import { PedidosComponent } from '../pedidos/pedidos.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'usuarios', component: UsuariosComponent }
];
