import { NgModule } from '@angular/core';

import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardGraphStatsComponent } from './card-graph-stats/card-graph-stats.component';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { MatTooltipModule } from '@angular/material';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';

@NgModule({
    declarations: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaVendedoresComponent
    ],
    imports: [
        CommonModule,
        MatTooltipModule
    ],
    exports: [
      CardStatsComponent,
      CardGraphStatsComponent,
      TareasComponent,
      ListaVendedoresComponent
    ]
  })
  export class ComponentsModule { }
