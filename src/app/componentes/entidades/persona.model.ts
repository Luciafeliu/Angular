export class PersonaModel {
    id? : number;
    apellido : string;
    descripcion : string;
    nombre : string;
    ocupacion : string;

    constructor(apellido:string, descripcion:string, nombre:string, ocupacion:string) {
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.ocupacion = ocupacion;

    }
}
