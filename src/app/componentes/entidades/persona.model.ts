export class PersonaModel {
    id? : number;
    apellido : string;
    descripcion : string;
    nombre : string;
    ocupacion : string;
    imagen : string;

    constructor(apellido:string, descripcion:string, nombre:string, ocupacion:string, imagen:string) {
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.imagen = imagen;

    }
}
