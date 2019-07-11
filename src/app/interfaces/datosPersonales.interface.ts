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
    usuReg: string;
    codTipoDocumento: string;
    numDocumento: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email?: string;
    fecNacimiento?: string;
    celular?: string;
}
