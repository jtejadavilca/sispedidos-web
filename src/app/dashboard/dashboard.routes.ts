import { Routes } from '@angular/router';

import { EstadisticasComponent } from '../sispedidos-web/estadisticas/estadisticas.component';
import { PedidosComponent } from '../sispedidos-web/pedidos/pedidos.component';
import { UsuariosComponent } from '../sispedidos-web/usuarios/usuarios.component';

export const dashboardRoutes: Routes = [
    { path: '', component: EstadisticasComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'usuarios', component: UsuariosComponent }
];
