export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    periodoE: string;
    institucionE: string;

    constructor(nombreE: string, descripcionE: string, periodoE: string, institucionE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodoE = periodoE;
        this.institucionE = institucionE;
    }
}
