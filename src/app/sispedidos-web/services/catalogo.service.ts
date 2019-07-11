import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ResponseBeanCatalogo, CatalogoEntity } from '../../interfaces/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  obtenerCatalogo(codCatalogo: string) {
    return this.http.get(`${environment.url_base}/catalogos/obtenercatalogo/${codCatalogo}`)
                    .pipe(
                      map( (respCat: ResponseBeanCatalogo) => {
                        if ( respCat.estado && respCat.dataLst) {
                          return respCat.dataLst.filter(  (catalogo: CatalogoEntity) => {
                            return catalogo.tipo === 'D';
                          });
                        }
                      })
                    );
  }

  cargarCatalogoCargosEmpleados() {
    return this.obtenerCatalogo('001');
  }
  cargarCatalogoAreasEmpleados() {
    return this.obtenerCatalogo('002');
  }
  cargarCatalogoZonasEmpleados() {
    return this.obtenerCatalogo('003');
  }
  cargarCatalogoTiposDocumento() {
    return this.obtenerCatalogo('004');
  }

}
