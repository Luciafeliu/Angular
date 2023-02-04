export class Habilidad {
    id? : number;
    nombre : string;
    procentaje : number;

    constructor(nombre:string, procentaje:number) {
        this.nombre = nombre;
        this.procentaje = procentaje;

    }
}
