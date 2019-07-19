import { Injectable, Injector } from '@angular/core';
import { GenericService } from './generic.service';
import { ICliente } from '../../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends GenericService {

  constructor(private injector: Injector) {
    super(injector, 'cliente');
  }

  listarClientes() {
    return this.listar();
  }

  registrarCliente(cliente: ICliente) {
    return this.registrar(cliente);
  }
}
