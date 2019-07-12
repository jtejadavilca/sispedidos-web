import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/shared/models/empleado.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IResponseBean } from '../../interfaces/response.interface';
import { IEmpleado } from '../../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  listarEmpleados() {
    return this.http.get(`${environment.url_base}/empleados/all`)
    .pipe(
      map( (respEmpleados: IResponseBean) => {
        if ( respEmpleados.estado && respEmpleados.dataLst) {
          // return respEmpleados.dataLst.filter(  (empleado: IEmpleado) => {
          //   return empleado.activo === 1;
          // });
          return respEmpleados.dataLst.filter(  (empleado: IEmpleado) => empleado.activo === 1);
        }
      })
    );
  }

  registrarEmpleado(empleado: Empleado) {
    return this.http.post(`${environment.url_base}/empleados/empleado`, empleado);
  }
}
