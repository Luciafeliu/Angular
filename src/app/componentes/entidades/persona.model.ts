export class Persona {
    id?: number;
    apellido : String;
    descripcion : String;
    nombre : String;
    ocupacion : String;
    imagen : String;

    constructor(apellido:String, descripcion:String, nombre:String, ocupacion:String, imagen:String) {
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.imagen = imagen;

    }
}
