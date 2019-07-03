export class Catalogo {
    public codCatalogo: string;
    public codDatacatalogo: string;
    public descripcion: string;
    public descripcionCorta: string;

    constructor( obj: DataObj ) {
        this.codCatalogo = obj && obj.codCatalogo || null;
        this.codDatacatalogo = obj && obj.codDatacatalogo || null;
        this.descripcion = obj && obj.descripcion || null;
        this.descripcionCorta = obj && obj.descripcionCorta || null;
    }
}

interface DataObj {
    codCatalogo: string;
    codDatacatalogo: string;
    descripcion: string;
    descripcionCorta: string;
}
