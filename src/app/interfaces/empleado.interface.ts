import { IDatosPersonales } from './datosPersonales.interface';
// usuReg			-> Usuario logeado quien realiza el registro
// codCargo		-> Codigo del cargo (Por ahora 001003: Vendedor)
// codArea			-> Código del área del empleado (Por ahora 002003: Comercial)
// codZona			-> Código de la zona asignada (Por ahora 003002: LIMA METROPOLITANA)
// fecIniVigencia	-> 1900-01-01 (Debería ser fecha de ingreso a la empresa)
// fecFinVigencia	-> 2599-12-31 (Debería actualizarce cuando el trabajar deja de trabajar en la empresa)
// datosPersonales	->

export interface IEmpleado {
    id?: number;
    activo?: number;
    usuReg: string;
    fecReg: string;
    usuModif?: any;
    fecModif?: any;
    codCargo: string;
    codArea: string;
    codZona: string;
    fecIniVigencia: string;
    fecFinVigencia: string;
    usuarioEntityList?: any;
    tbEmpleadoId: number;
    datosPersonales: IDatosPersonales;
}
