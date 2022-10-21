
import * as ReadlineSync from 'readline-Sync';
import RegistroAutomotor from './registroAutomotor';
import LectorArchivos from './lectorArchivos';
import Auto from './auto';

let datos: LectorArchivos = new LectorArchivos("autos.txt");
export default datos;
export let listaAutos: Auto[] = [];
let registro: RegistroAutomotor = new RegistroAutomotor("Chevrolet", 2020, "KKK222", "España 1280", true, listaAutos);


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


