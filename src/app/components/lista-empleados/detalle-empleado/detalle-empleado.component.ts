import { Component, OnInit, Input } from '@angular/core';
import { IEmpleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.scss']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Input() empleado: IEmpleado;
  constructor() { }

  ngOnInit() {
  }

}
