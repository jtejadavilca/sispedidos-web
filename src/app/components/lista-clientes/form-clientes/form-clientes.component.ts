import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../sispedidos-web/services/catalogo.service';
import { IResponseBean } from '../../../interfaces/response.interface';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// SweetAlert2
// import Swal from 'sweetalert2';
import { AlertService } from '../../../shared/services/alert.service';

import { ICatalogo } from '../../../interfaces/catalogo.interface';
import { ICliente } from '../../../interfaces/cliente.interface';
import { ClienteService } from '../../../sispedidos-web/services/cliente.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.scss']
})
export class FormClientesComponent implements OnInit {

  tiposClientesSelected = '008001';
  tiposClientes: Observable<ICatalogo[]>;

  zonaDefaultSelected = '003002';
  zonas: Observable<ICatalogo[]>;

  forma: FormGroup;
  constructor( private catalogoService: CatalogoService,
               private alertService: AlertService,
               private clienteService: ClienteService) {
  }

  ngOnInit() {
    // Carga de Tipos de Clientes
    this.tiposClientes = this.catalogoService.cargarCatalogoTiposCliente();

    // Carga de zonas
    this.zonas = this.catalogoService.cargarCatalogoZonasEmpleados();

    this.initForm();
  }

  initForm() {
    this.forma = new FormGroup({
      numRuc: new FormControl( '', Validators.required )
    });
  }

  registrarCliente() {
    if ( this.forma.invalid ) {
      this.alertService.dangerMsj( 'Faltan completar datos' );
      return;
    }

    const cliente: ICliente = {
      ...this.forma.value
    };

    this.clienteService.registrarCliente(cliente)
        .subscribe( (response: IResponseBean) => {
          if ( response.estado ) {
            this.alertService.successMsj( 'Se registró el cliente con éxito', 'Registro correcto', () => {

            });
          }
        });
  }
}
