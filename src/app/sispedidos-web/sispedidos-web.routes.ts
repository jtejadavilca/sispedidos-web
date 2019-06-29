import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ClientesComponent } from './clientes/clientes.component';

export const sispedidosWebdRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: '**', redirectTo: 'dashboard' }
];
