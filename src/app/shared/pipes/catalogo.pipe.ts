import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoService } from '../../sispedidos-web/services/catalogo.service';

@Pipe({
  name: 'catalogo'
})
export class CatalogoPipe implements PipeTransform {

  constructor(private catalogoService: CatalogoService) { }

  transform(codCatalogo: string): any {
    this.catalogoService.obtenerCatalogoEspecifico(codCatalogo);
    return 'XXX';
  }

}
