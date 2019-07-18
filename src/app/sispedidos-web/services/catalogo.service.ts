import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, filter, take } from 'rxjs/operators';
import { IResponseBean } from '../../interfaces/response.interface';
import { Observable, Subscription, of } from 'rxjs';
import { ICatalogo } from '../../interfaces/catalogo.interface';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private mapCatalogo: Observable<any>;

  constructor(private http: HttpClient) {
    this.cargarCatalogos();
  }

  cargarCatalogos() {
    if ( !this.mapCatalogo ) {

      this.http.get(`${environment.url_base}/catalogos/cargar-catalogos`)
        .pipe(
          take(1)
        )
        .subscribe((resp: IResponseBean) => {
          this.mapCatalogo = resp.dataObj;
        });
    }

  }

  obtenerListaCatalogos(codCatalogo: string): Observable<ICatalogo[]> {
    if ( this.mapCatalogo &&  this.mapCatalogo[codCatalogo]) {
      return of( this.mapCatalogo[codCatalogo] );
    }
    return this.http.get(`${environment.url_base}/catalogos/obtenercatalogo/${codCatalogo}`)
                    .pipe(
                      map( (respCat: IResponseBean) => {
                        if ( respCat.estado && respCat.dataLst) {
                          return respCat.dataLst.filter(  (catalogo: ICatalogo) => catalogo.tipo === 'D');
                        }
                      })
                    );
  }

  cargarCatalogoCargosEmpleados() {
    return this.obtenerListaCatalogos('001');
  }
  cargarCatalogoAreasEmpleados() {
    return this.obtenerListaCatalogos('002');
  }
  cargarCatalogoZonasEmpleados() {
    return this.obtenerListaCatalogos('003');
  }
  cargarCatalogoTiposDocumento() {
    return this.obtenerListaCatalogos('004');
  }

  obtenerCatalogoEspecifico(codCatalogo: string): Promise<ICatalogo> {
    if ( !codCatalogo || codCatalogo.length < 6 ) {
      return null;
    }
    const catalogo: Observable<ICatalogo> = this.obtenerListaCatalogos(codCatalogo.substr(0, 3)).pipe(

          map( (lstCat: ICatalogo[]) => {
            const newCat = lstCat.filter(
               (cat: ICatalogo) => {
                 return cat.catalogoEntityPK.paramCatalogoElemento === codCatalogo.substr(3, 3) && cat.tipo === 'D';
               }
            );
            return newCat[0] as ICatalogo;
          })
    );

    return catalogo.toPromise();
  }

}
