import { NgModule } from '@angular/core';

import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardGraphStatsComponent } from './card-graph-stats/card-graph-stats.component';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { FormVendedorComponent } from './lista-vendedores/form-vendedor/form-vendedor.component';
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
      ListaVendedoresComponent,
      FormVendedorComponent
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
      ListaVendedoresComponent
    ]
  })
  export class ComponentsModule { }
