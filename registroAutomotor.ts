import datos from "./registro";
import * as ReadlineSync from 'readline-Sync';
import Auto from "./auto";
import { listaAutos } from "./registro";

export default class RegistroAutomotor extends Auto {
    private direccion: string;
    private abierto: boolean;
    private autos: Array<Auto>;

    public constructor(marca: string, año: number, patente: string, direccion: string, abierto: boolean, autos: Array<Auto>) {
        super(marca, año, patente);
        this.direccion = direccion;
        this.abierto = abierto;
        this.autos = autos;

    }
    public getListaDeAutos(): Array<Auto> {
        return this.autos;
    }
    public mostrarRegistro(): void {
        console.log(this.direccion);
        console.log(this.abierto);
        console.log(this.autos);
    }
    public borrarAuto(autos: Array<Auto>) {

        let patente: string = (ReadlineSync.question("Ingrese patente a borrar: "));
        for (let i = 0; i < autos.length; i++) {
            if (patente === listaAutos[i].getPatente()) {
                autos.splice(i, 1);
                console.log("Borrado exitosamente");
            }
        }
    }

    public crearAuto(autos: Auto[]) {
        let marca: string = ReadlineSync.question("Ingrese marca: ")
        let año: number = ReadlineSync.questionInt("Ingrese anio : ")
        let patente: string = ReadlineSync.question("Ingrese patente: ")
        let nuevoAuto: Auto = new Auto(marca, año, patente);

        autos.push(nuevoAuto);
    }

    public cargarLista(lista: string[], autos: Auto[]) {
        for (let i: number = 0; i < datos.getArregloString().length; i++) {
            let propiedad: string[] = lista[i].split(',');
            let marca: string = propiedad[0];
            let año: number = Number(propiedad[1]);
            let patente: string = propiedad[2];
            let nuevoAuto: Auto = new Auto(marca, año, patente);

            autos.push(nuevoAuto);
        }

    }

    public modificarAuto(autos: Array<Auto>) {

        let marca: string = ReadlineSync.question("Ingrese marca: ");
        let año: number = ReadlineSync.questionInt("Ingrese anio: ");
        let patente: string = ReadlineSync.question("Ingrese patente: ");
        let autoModificado: Auto = new Auto(marca, año, patente);
        let dominio: string = ReadlineSync.question("Ingrese dominio a modificar: ")
        for (let i = 0; i < autos.length; i++) {
            if (dominio === listaAutos[i].getPatente()) {
                listaAutos[i] = autoModificado;
                console.log("Modificado exitosamente");
            }
        }
    }
}