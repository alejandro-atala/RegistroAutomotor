import * as fs from 'fs';
import * as ReadlineSync from 'readline-Sync';

class Auto {
    private marca: string;
    private año: number;
    private patente: string;

    public constructor(marca: string, año: number, patente: string) {
        this.marca = marca;
        this.año = año;
        this.patente = patente;
    }

}

class RegistroAutomotor {
    private direccion: string;
    private abierto: boolean;
    private autos: Array<Auto>;

    public constructor(direccion: string, abierto: boolean, autos: Array<Auto>) {
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
  
        let ubicacion = (ReadlineSync.questionInt("Ingrese ubicacion a borrar: "))-1;
        autos.splice(ubicacion,1);
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
            let propiedad : string[] = lista[i].split(','); 
            let marca: string =  propiedad[0];
            let año: number = Number(propiedad[1]);
            let patente: string = propiedad[2];
            let nuevoAuto: Auto = new Auto(marca, año, patente);
            
            autos.push(nuevoAuto);
        }
    
    }

    public modificarAuto(arregloAuto: Array<Auto>) {

        let marca: string = ReadlineSync.question("Ingrese marca: ");
        let año: number = ReadlineSync.questionInt("Ingrese anio: ");
        let patente: string = ReadlineSync.question("Ingrese patente: ");
        let autoModificado: Auto = new Auto(marca, año, patente);
        let posicion :number = ReadlineSync.questionInt("Ingrese ubicacion a modificar: ")
        delete arregloAuto[posicion-1];
        arregloAuto[posicion-1] = autoModificado;

    }
}

class LectorArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
        this.arregloString = archivoTxt.split(';');
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}

//Iniciar programa
let datos: LectorArchivos = new LectorArchivos("autos.txt");
let listaAutos: Auto[] = [];
let registro: RegistroAutomotor = new RegistroAutomotor("España 1280", true, listaAutos);


let opcion: number = 0;
while (opcion != 6) {
    console.log("Registro del Automotor")
    console.log("1 - Listado de autos");
    console.log("2 - Cargar auto");
    console.log("3 - Modificar auto");
    console.log("4 - Borrar auto");
    console.log("5 - Cargar listado desde .txt");
    console.log("6 - Salir");

    opcion = (ReadlineSync.questionInt("Ingrese opcion: "))
    switch (opcion) {
        case 1:
            registro.mostrarRegistro();
            break;
        case 2:
            registro.crearAuto(listaAutos);
            break;
        case 3:
            registro.modificarAuto(listaAutos);
            break;
        case 4:
            registro.borrarAuto(listaAutos);
            break;
        case 5:
            registro.cargarLista(datos.getArregloString(), listaAutos);
            break;

    }
   
}
console.log("Usted a salido del programa");

