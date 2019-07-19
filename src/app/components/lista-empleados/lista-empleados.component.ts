import { Component, OnInit, Input } from '@angular/core';
import { IEmpleado } from 'src/app/interfaces/empleado.interface';
import { EmpleadoService } from 'src/app/sispedidos-web/services/empleado.service';
import { IResponseBean } from '../../interfaces/response.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  @Input() onlyShow = true;

  empleados: Observable<IEmpleado[]>;

  empleadoSeleccionado: IEmpleado = null;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit() {
    // this.empleadoService.listarEmpleados()
    //     .subscribe( (respEmpleado: IEmpleado[]) => {
    //       this.empleados = respEmpleado ? respEmpleado : [];
    //       console.log('this.empleados', this.empleados);
    //     });
    this.empleados = this.empleadoService.listarEmpleados();
  }

  verDetalleEmpleado(empleado: IEmpleado) {
    console.log('empleado', empleado);
    this.empleadoSeleccionado = empleado;
  }
}
