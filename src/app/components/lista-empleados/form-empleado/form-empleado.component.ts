import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../sispedidos-web/services/catalogo.service';
import { CatalogoEntity } from '../../../interfaces/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.scss']
})
export class FormEmpleadoComponent implements OnInit {

  cargoSelected = '001002';
  cargos: CatalogoEntity[] = [];

  forma: FormGroup;

  constructor( private catalogoService: CatalogoService ) { }

  ngOnInit() {
    // Carga de Catalogo  de Cargos
    this.catalogoService.cargarCatalogoCargosEmpleados()
    .subscribe( (response: CatalogoEntity[]) => {
      console.log('response->', response);
      this.cargos = response;
    });
    // this.cargos = this.catalogoService.cargarCatalogoCargosEmpleados();

    this.forma = new FormGroup({
      cargoEmpleado: new FormControl('001003', Validators.required)
    });

  }

  registrarEmpleado() {
    console.log('....');
  }

}
