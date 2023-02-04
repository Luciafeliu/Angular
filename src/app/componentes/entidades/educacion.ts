export class Educacion {
    id? : number;
    descripcion : string;
    estado : string;
    fin : number;
    inicio  : number;
    institucion : string;
    titulo : string;

    constructor(descripcion:string, estado:string, inicio:number, fin:number, institucion:string, titulo:string) {
        this.descripcion = descripcion;
        this.estado = estado;
        this.inicio = inicio;
        this.fin = fin;
        this.institucion = institucion;
        this.titulo = titulo;

    }
}
