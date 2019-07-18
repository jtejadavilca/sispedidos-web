import { Pipe, PipeTransform } from '@angular/core';
import { CatalogoService } from '../../sispedidos-web/services/catalogo.service';

@Pipe({
  name: 'catalogo'
})
export class CatalogoPipe implements PipeTransform {

  constructor(private catalogoService: CatalogoService) { }

  async transform(codCatalogo: string): Promise<string> {
    let desc;
    await this.catalogoService.obtenerCatalogoEspecifico(codCatalogo)
    .then( catalogo => desc = catalogo ? catalogo.descripcionCorta : '-');
    return desc;
  }

}
