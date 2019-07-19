import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../sispedidos-web/services/catalogo.service';
import { IResponseBean } from '../../../interfaces/response.interface';

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
import { DatosPersonales } from 'src/app/shared/models/datosPersonales.model';
import { EmpleadoService } from '../../../sispedidos-web/services/empleado.service';
import { ICatalogo } from '../../../interfaces/catalogo.interface';
import { IEmpleado } from '../../../interfaces/empleado.interface';

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
  cargos: Observable<ICatalogo[]>;
  areaDefaultSelected = '002003';
  areas: Observable<ICatalogo[]>;
  zonaDefaultSelected = '003002';
  zonas: Observable<ICatalogo[]>;
  tipoDocumentoDefaultSelected = '004002';
  tiposDocumento: Observable<ICatalogo[]>;

  forma: FormGroup;

  constructor( private catalogoService: CatalogoService,
               private alertService: AlertService,
               private empleadoService: EmpleadoService) {
  }

  ngOnInit() {
    // Carga de Catalogo  de Cargos
    this.cargos = this.catalogoService.cargarCatalogoCargosEmpleados();

    // Carga de Catalogo  de Áreas
    this.areas = this.catalogoService.cargarCatalogoAreasEmpleados();

    // Carga de Catalogo  de Zonas
    this.zonas = this.catalogoService.cargarCatalogoZonasEmpleados();

    // Carga de Catalogo  de Tipos de Documentos
    this.tiposDocumento = this.catalogoService.cargarCatalogoTiposDocumento();

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
      this.alertService.dangerMsj('Faltan completar datos');
      return;
    }

    const datosPersonales = new DatosPersonales({...this.forma.value, usuReg: 'JTV_ADMIN'});
    const empleado: IEmpleado = {
      ...this.forma.value,
      usuReg: 'JTV_ADMIN',
      datosPersonales
    };

    this.empleadoService.registrarEmpleado( empleado ).subscribe( (response: IResponseBean) => {
      console.log('response', response);
      if (response.estado) {
        this.alertService.successMsj('Se registró el empleado con éxito', 'Registro correcto', () => {
          this.cargarNuevoEmpleado(response.dataObj);
        });
      } else {
        console.log(response.mensajesErrores);
      }
    });

  }

  cargarNuevoEmpleado(nuevoEmpleado) {
    console.log('nuevoEmpleado', nuevoEmpleado);
  }
}
