export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    puestoE : string;
    periodoE : string;

    constructor(nombreE: string, descripcionE: string, puestoE: string, periodoE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.puestoE = puestoE;
        this.periodoE = periodoE;
    }
}
