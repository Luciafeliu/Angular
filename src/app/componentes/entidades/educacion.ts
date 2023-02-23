export class Educacion {
    id : number;
    descripcion : string;
    estado : string;
    fin : string;
    inicio  : string;
    institucion : string;
    titulo : string;

    constructor(descripcion:string, estado:string, inicio:string, fin:string, institucion:string, titulo:string) {
        this.descripcion = descripcion;
        this.estado = estado;
        this.inicio = inicio;
        this.fin = fin;
        this.institucion = institucion;
        this.titulo = titulo;

    }
}
