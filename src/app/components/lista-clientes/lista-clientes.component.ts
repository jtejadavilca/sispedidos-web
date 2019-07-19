import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../../interfaces/cliente.interface';
import { ClienteService } from '../../sispedidos-web/services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  @Input() onlyShow = true;

  clientes: Observable<ICliente[]>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.listarClientes();
  }

}
