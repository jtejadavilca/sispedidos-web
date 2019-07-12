import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, filter } from 'rxjs/operators';
import { IResponseBean } from '../../interfaces/response.interface';
import { Observable } from 'rxjs';
import { ICatalogo } from '../../interfaces/catalogo.interface';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private mapCatalogo: any[] = [];

  constructor(private http: HttpClient) { }

  obtenerListaCatalogos(codCatalogo: string) {
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

  obtenerCatalogoEspecifico(codCatalogo: string) {
    if ( !codCatalogo || codCatalogo.length < 6 ) {
      return null;
    }
    // console.log('codCatalogo', codCatalogo);
    // console.log('codCatalogo.substr(0, 3)', codCatalogo.substr(0, 3));
    // console.log('codCatalogo.substr(3, 3)', codCatalogo.substr(3, 3));
    const catalogo = this.obtenerListaCatalogos(codCatalogo.substr(0, 3)).pipe(
    // filter( cat => cat.catalogoEntityPK.paramCatalogoElemento === codCatalogo.substr(3, 3) )
      map( (lstCat: ICatalogo[]) => {
        return lstCat.filter( (cat: ICatalogo) => cat.catalogoEntityPK.paramCatalogoElemento === codCatalogo.substr(3, 3));
      })
    ).subscribe( c => {
      console.log('c', c);
      return c;
    });

    console.log('catalogo', catalogo);
  }

}
