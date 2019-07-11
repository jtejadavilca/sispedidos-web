import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../sispedidos-web/services/catalogo.service';
import { CatalogoEntity } from '../../../interfaces/response.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// Calendar
import {MomentDateAdapter, MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';

// SweetAlert2
// import Swal from 'sweetalert2';
import { AlertService } from '../../../shared/services/alert.service';
import { Empleado } from '../../../shared/models/empleado.model';
import { DatosPersonales } from 'src/app/shared/models/datosPersonales.model';

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    // {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'}
  ]
})
export class FormEmpleadoComponent implements OnInit {

  cargoDefaultSelected = '001003';
  cargos: CatalogoEntity[] = [];
  areaDefaultSelected = '002003';
  areas: CatalogoEntity[] = [];
  zonaDefaultSelected = '003002';
  zonas: CatalogoEntity[] = [];
  tipoDocumentoDefaultSelected = '004002';
  tiposDocumento: CatalogoEntity[] = [];

  forma: FormGroup;

  constructor( private catalogoService: CatalogoService,
               private alertService: AlertService) {
  }

  ngOnInit() {
    // Carga de Catalogo  de Cargos
    this.catalogoService.cargarCatalogoCargosEmpleados()
    .subscribe( (response: CatalogoEntity[]) => {
      this.cargos = response;
    });
    // Carga de Catalogo  de Áreas
    this.catalogoService.cargarCatalogoAreasEmpleados()
    .subscribe( (response: CatalogoEntity[]) => {
      this.areas = response;
    });
    // Carga de Catalogo  de Zonas
    this.catalogoService.cargarCatalogoZonasEmpleados()
    .subscribe( (response: CatalogoEntity[]) => {
      this.zonas = response;
    });
    // Carga de Catalogo  de Tipos de Documentos
    this.catalogoService.cargarCatalogoTiposDocumento()
    .subscribe( (response: CatalogoEntity[]) => {
      this.tiposDocumento = response;
    });
    // this.cargos = this.catalogoService.cargarCatalogoCargosEmpleados();

    this.initForm();

  }

  initForm() {
    this.forma = new FormGroup({
      codCargo: new FormControl(this.cargoDefaultSelected, Validators.required),
      codArea: new FormControl(this.areaDefaultSelected, Validators.required),
      codZona: new FormControl(this.zonaDefaultSelected, Validators.required),
      nombres: new FormControl('', Validators.required),
      apellidoPaterno: new FormControl('', Validators.required),
      apellidoMaterno: new FormControl('', Validators.required),
      codTipoDocumento: new FormControl('', Validators.required),
      numDocumento: new FormControl('', Validators.required),
      email: new FormControl(''),
      fecNacimiento: new FormControl(new Date('1990-01-01')),
      celular: new FormControl(''),
      fecIniVigencia: new FormControl(new Date()),
      fecFinVigencia: new FormControl(new Date('2100-11-31'))
    });
  }

  registrarEmpleado() {
    if ( this.forma.invalid ) {
      this.alertService.dangerMsj('Falta completar datos');
      return;
    }

    const datosPersonales = new DatosPersonales({...this.forma.value, usuReg: 'JTV_ADMIN'});
    const empleado = new Empleado({
      ...this.forma.value,
      usuReg: 'JTV_ADMIN',
      datosPersonales
    });

    console.log('empleado', empleado);

  }

}
