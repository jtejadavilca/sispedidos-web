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
import { VendedoresComponent } from './vendedores/vendedores.component';

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
    VendedoresComponent
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
    VendedoresComponent,
    UsuariosComponent
  ]
})
export class SispedidosWebModule { }
