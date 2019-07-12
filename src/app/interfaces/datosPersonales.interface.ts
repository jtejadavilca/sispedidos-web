// usuReg				-> Usuario logeado quien realiza el registro
// codTipoDocumento	-> Código de tipo de documento (Por ahora 004002: DNI)
// numDocumento		-> Número de documento del empleado
// nombres				-> Nombres del empleado
// apellidoPaterno		-> Apellido parterno del empleado
// apellidoMaterno		-> Apellido marterno del empleado
// email				-> Email del empleado
// fecNacimiento		-> Fecha de nacimiento del empleado
// celular				-> Numero de celular del empleado

export interface IDatosPersonales {
    id?: number;
    activo?: number;
    usuReg: string;
    fecReg: string;
    usuModif?: any;
    fecModif?: any;
    codTipoDocumento: string;
    numDocumento: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email?: string;
    fecNacimiento?: string;
    celular?: string;
    telefono1?: any;
    telefono2?: any;
    direccionEntityList?: any;
    tbDatosPersonalesId: number;
}
