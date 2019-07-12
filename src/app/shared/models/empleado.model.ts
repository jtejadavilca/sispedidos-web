import { IEmpleado } from '../../interfaces/empleado.interface';
import { IDatosPersonales } from '../../interfaces/datosPersonales.interface';
export class Empleado {
    public usuReg: string;
    public codCargo: string;
    public codArea: string;
    public codZona: string;
    public fecIniVigencia: string;
    public fecFinVigencia: string;
    public datosPersonales: IDatosPersonales;


    constructor( obj: IEmpleado ) {
        this.usuReg = obj && obj.usuReg || null;
        this.codCargo = obj && obj.codCargo || null;
        this.codArea = obj && obj.codArea || null;
        this.codZona = obj && obj.codZona || null;
        this.fecIniVigencia = obj && obj.fecIniVigencia || null;
        this.fecFinVigencia = obj && obj.fecFinVigencia || null;
        this.datosPersonales = obj && obj.datosPersonales || null;
    }
}
