import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SispedidosWebComponent } from './sispedidos-web.component';
import { sispedidosWebdRoutes } from './sispedidos-web.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
      path: '',
      component: SispedidosWebComponent,
      children: sispedidosWebdRoutes,
  },
];


@NgModule({
  declarations: [
    DashboardComponent,
    EstadisticasComponent,
    PedidosComponent,
    UsuariosComponent,
    SispedidosWebComponent,
    EmpleadosComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    SharedModule,
    ComponentsModule
  ],
  exports: [
    DashboardComponent,
    EstadisticasComponent,
    PedidosComponent,
    UsuariosComponent,
    EmpleadosComponent,
    ClientesComponent
  ]
})
export class SispedidosWebModule { }
