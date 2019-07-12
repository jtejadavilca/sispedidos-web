import { NgModule } from '@angular/core';

import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardGraphStatsComponent } from './card-graph-stats/card-graph-stats.component';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormEmpleadoComponent } from './lista-empleados/form-empleado/form-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { FormClientesComponent } from './lista-clientes/form-clientes/form-clientes.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaEmpleadosComponent,
      FormEmpleadoComponent,
      ListaClientesComponent,
      FormClientesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatMomentDateModule,
        // MatNativeDateModule,
        MatDatepickerModule,
        SharedModule
    ],
    exports: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaEmpleadosComponent,
      ListaClientesComponent,
      FormClientesComponent
    ]
  })
  export class ComponentsModule { }
