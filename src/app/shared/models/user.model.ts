import { Cargo } from './cargo.model';
export class User {
    public nombre: string;
    public uid: string;
    public cargo: Cargo;

    constructor( obj: DataObj ) {
        this.nombre = obj && obj.nombre || null;
        this.uid = obj && obj.uid || null;
        this.cargo = obj && obj.cargo || null;
    }
}

interface DataObj {
    nombre: string;
    uid: string;
    cargo: Cargo;
}
