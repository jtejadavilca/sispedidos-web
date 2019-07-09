import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { ResponseBeanCatalogo, CatalogoEntity } from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  cargarCatalogoCargosEmpleados() {
    return this.http.get(`${environment.url_base}/catalogos/obtenercatalogo/001`)
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
}
