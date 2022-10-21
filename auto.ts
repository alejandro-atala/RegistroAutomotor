export default class Auto {
    private marca: string;
    private año: number;
    private patente: string;

    public constructor(marca: string, año: number, patente: string) {
        this.marca = marca;
        this.año = año;
        this.patente = patente;
    }
    public getPatente(): string{
        return this.patente;
    }

}