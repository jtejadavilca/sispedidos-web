import { NgModule } from '@angular/core';

import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardGraphStatsComponent } from './card-graph-stats/card-graph-stats.component';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormEmpleadoComponent } from './lista-empleados/form-empleado/form-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
    declarations: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaEmpleadosComponent,
      FormEmpleadoComponent
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
    ],
    exports: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaEmpleadosComponent
    ]
  })
  export class ComponentsModule { }
