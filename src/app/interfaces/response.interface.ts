export interface ResponseBeanCatalogo {
  estado: boolean;
  mensajesErrores?: any;
  dataObj?: any;
  dataLst ?: [];
}

export interface CatalogoEntity {
  catalogoEntityPK: CatalogoEntityPK;
  descripcionCorta: string;
  descripcion: string;
  tipo: string;
  activo: number;
  usuReg: string;
  fecReg: string;
  usuModif?: any;
  fecModif?: any;
}

export interface CatalogoEntityPK {
  paramCatalogo: string;
  paramCatalogoElemento: string;
}
