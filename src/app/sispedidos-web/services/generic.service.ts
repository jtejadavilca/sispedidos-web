import { Injectable, Injector } from '@angular/core';
import { IResponseBean } from '../../interfaces/response.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IGeneric } from '../../interfaces/generic.interface';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  private http: HttpClient;
  constructor(injector: Injector, private path: string) {
    this.http = injector.get<HttpClient>(HttpClient);
  }

  protected listar<T extends IGeneric>() {
    const url = `${environment.url_base}/${this.path}s/all`;
    console.log('listar...', url);
    return this.http.get(url)
    .pipe(
      map( (respEntities: IResponseBean) => {
        if ( respEntities.estado && respEntities.dataLst) {
          return respEntities.dataLst.filter(  (entity: T) => entity.activo === 1);
        }
      })
    );
  }

  protected registrar<T extends IGeneric>(entity: T ) {
    return this.http.post(`${environment.url_base}/${this.path}s/${this.path}`, entity);
  }
}
