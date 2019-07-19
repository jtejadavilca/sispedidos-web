import { IGeneric } from './generic.interface';

export interface ICliente extends IGeneric {
    id ?: number;
    numRuc ?: string;
    razonSocial ?: string;
    codZona ?: string;
    codTipoCliente ?: string;
    telefono1 ?: string;
    telefono2 ?: string;
}
