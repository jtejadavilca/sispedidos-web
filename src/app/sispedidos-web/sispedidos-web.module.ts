import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [EstadisticasComponent, PedidosComponent, UsuariosComponent],
  imports: [
    CommonModule
  ]
})
export class SispedidosWebModule { }
