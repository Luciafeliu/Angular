export class Proyecto {
    id : number;
    descripcion : string;
    imagen : string;
    nombre : string;

    constructor(descripcion:string, imagen:string, nombre:string) {
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.nombre = nombre;
    }
}
