export interface ICatalogo {
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

interface CatalogoEntityPK {
    paramCatalogo: string;
    paramCatalogoElemento: string;
}
