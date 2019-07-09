import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../sispedidos-web/services/catalogo.service';
import { CatalogoEntity } from '../../../interfaces/response.interface';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.scss']
})
export class FormEmpleadoComponent implements OnInit {

  cargoSelected = '001002';
  cargos: CatalogoEntity[] = [];

  constructor( private catalogoService: CatalogoService ) { }

  ngOnInit() {
    this.catalogoService.cargarCatalogoCargosEmpleados()
    .subscribe( (response: CatalogoEntity[]) => {
      console.log('response', response);
      this.cargos = response;
    });
  }

}
