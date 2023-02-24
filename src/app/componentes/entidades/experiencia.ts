export class Experiencia {
    id : number;
    area : string;
    descripcion : string;
    fin : number;
    inicio : number;
    titulo : string;

    constructor(area:string, descripcion:string, fin:number, inicio:number, titulo:string) {
        this.area = area;
        this.descripcion = descripcion;
        this.fin = fin;
        this.inicio = inicio;
        this.titulo = titulo;

    }
}
