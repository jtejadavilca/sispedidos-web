import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import {Injector} from '@angular/core';
import { IEmpleado } from '../../interfaces/empleado.interface';

export let InjectorInstance: Injector;

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService extends GenericService {

  constructor(private injector: Injector) {
    super(injector, 'empleado');
  }

  listarEmpleados() {
    return this.listar();
  }

  registrarEmpleado(empleado: IEmpleado) {
    return this.registrar(empleado);
  }
}
