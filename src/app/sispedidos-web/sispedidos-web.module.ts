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

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

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
    SispedidosWebComponent
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
    SharedModule
  ],
  exports: [
    DashboardComponent,
    EstadisticasComponent,
    PedidosComponent,
    UsuariosComponent
  ]
})
export class SispedidosWebModule { }
