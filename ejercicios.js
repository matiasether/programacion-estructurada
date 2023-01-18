/*Escribir un programa que imprima los números del 1 al 100
Escribir un programa que imprima los números pares del 1 al 100
Escribir un programa que imprima los números impares del 1 al 100
Escribir un programa que calcule la suma de los números del 1 al 100
Escribir un programa que calcule el promedio de los números del 1 al 100
Escribir un programa que calcule el factorial de un número dado
Escribir un programa que imprima los números fibonacci hasta un número dado
Escribir un programa que determine si un número es primo o no
Escribir un programa que genere una tabla de multiplicar de un número dado
Escribir un programa que ordene un arreglo de números de menor a mayor*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [
    {numero: 1, descripcion: "Imprime los números del 1 al 100", ejecutar: tareaUno},
    {numero: 2, descripcion: "Imprime los números pares del 1 al 100", ejecutar: tareaDos},
    {numero: 3, descripcion: "Imprime los números impares del 1 al 100", ejecutar: tareaTres},
    {numero: 4, descripcion: "Calcula la suma de los números del 1 al 100", ejecutar: tareaCuatro},
    {numero: 5, descripcion: "Calcule el promedio de los números del 1 al 100", ejecutar: tareaCinco},
];

function continueOrExit(){
    rl.question("¿Desea seleccionar otra tarea? (si/no)", (respuesta) => {
        if (respuesta === "si") {
            main();
        } else {
            console.log("Gracias por utilizar el programa. ¡Hasta luego!");
            rl.close();
        }
    });
}

function main(){
    console.log(`Elige un numero del 1 al ${tareas.length} para seleccionar una tarea: `);
    tareas.forEach(tarea => {
        console.log(`${tarea.numero}. ${tarea.descripcion}`);
    });
    rl.question("Elige una tarea: ", (respuesta) => {
    tarea = parseInt(respuesta);
    let tareaElegida = tareas.find(tareaElegida => tareaElegida.numero === tarea);
    if(tareaElegida) {
        rl.question(`El programa ${tareaElegida.numero} ${tareaElegida.descripcion} ¿Desea verlo? (si/no)`, (respuesta) => {
            if (respuesta === "si") {
                tareaElegida.ejecutar();
                continueOrExit();
            } else {
                continueOrExit();
            }
        });
    } else {
        console.log("La tarea seleccionada no existe.");
        continueOrExit();
    }
});
}

function tareaUno() {
    for (let X = 1; X <= 100; X++) { // X = 1 ¿X es menor o igual a 100?, falso, X suma 1
        console.log(X); // Imprime X, desde 1 hasta 100
    }
    continueOrExit();
}

function tareaDos() {
    for (let X = 1; X <= 100; X++) { //X = 1, ¿X es menor o igual a 100? falso, X suma 1 en cada ciclo
        if (X % 2 === 0) { //Si de X al dividirse por 2, el resto da exactamente igual a 0
            console.log(X); //Entonces imprime los numeros pares
        }
    }
    continueOrExit();
}

function tareaTres() {
    for (let X = 1; X <= 100; X++) { // X es 1 ¿X es menor o igual a 100? No, el ciclo prosigue y suma 1 a X
        if (X % 2 !== 0) { //Si X es dividido por 2 y resto de la division es distinto a 0, es decir numeros IMPARES.
            console.log(X); //Si la condicion era correcta imprime X: 1, 3, 5, 7 ... hasta 99 
        }
    }
    continueOrExit(); 
}

function tareaCuatro() {
    //Escribir un programa que calcule la suma de los números del 1 al 100

    let z = 0; //Designo una variable z como almacenamiento
    for(let x = 0; x <= 100; x++){ //itero x en ciclo hasta 100 iniciando en 0 
        z += x;  //llamo z para sumarle x en cada ciclo
        // el resultado no se muestra durante cada ciclo DENTRO del for porque mostraria TODAS las iteraciones hasta que finaliza
    } 
    console.log(z) // muestra en pantalla la suma final del 1 hasta el 100
    continueOrExit();
}

function tareaCinco() {
    //Escribir un programa que calcule el promedio de los números del 1 al 100
    let z = 0;
    let y = 100
    for (let x = 0; x <= y; x++) {
        z += x; //Este suma todos los numeros del 1 al 100
    } //el resultado seria 5050
    let resultado = z / y; //resultado almacena la division de y por z (5050 / 100)
    console.log(resultado) //50.5
    continueOrExit();
}

main();