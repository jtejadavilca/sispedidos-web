import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Routes } from '@angular/router';
import { VendedoresComponent } from './vendedores/vendedores.component';

export const sispedidosWebdRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'vendedores', component: VendedoresComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: '**', redirectTo: 'dashboard' }
];
