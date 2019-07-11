import { IDatosPersonales } from '../../interfaces/datosPersonales.interface';


export class DatosPersonales {

    public usuReg: string;
    public codTipoDocumento: string;
    public numDocumento: string;
    public nombres: string;
    public apellidoPaterno: string;
    public apellidoMaterno: string;
    public email: string;
    public fecNacimiento: string;
    public celular: string;

    constructor(obj: IDatosPersonales) {
        this.usuReg = obj && obj.usuReg || null;
        this.codTipoDocumento = obj && obj.codTipoDocumento || null;
        this.numDocumento = obj && obj.numDocumento || null;
        this.nombres = obj && obj.nombres || null;
        this.apellidoPaterno = obj && obj.apellidoPaterno || null;
        this.apellidoMaterno = obj && obj.apellidoMaterno || null;
        this.email = obj && obj.email || null;
        this.fecNacimiento = obj && obj.fecNacimiento || null;
        this.celular = obj && obj.celular || null;
    }
}
