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

//Ejercicio 1 Correcto a la primera

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [
    {numero: 1, descripcion: "Imprimir los números del 1 al 100", ejecutar: tareaUno},
    {numero: 2, descripcion: "Imprimir los números pares del 1 al 100", ejecutar: tareaDos},
    {numero: 3, descripcion: "Imprimir los números impares del 1 al 100", ejecutar: tareaTres},
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
    console.log("Elige un numero del 1 al N para seleccionar una tarea:");
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
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    continueOrExit();
}

function tareaDos() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    continueOrExit();
}

function tareaTres() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
    continueOrExit();
}

main();