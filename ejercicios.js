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

const ejecutaTarea = () => {
    rl.question(`¿Que programa desea ejecutar? seleccione del 1-10`, (tarea) => {
    tarea = Number(tarea);

    if (tarea > 0 && tarea < 11) {

        switch (tarea) {
            case 1:
                tareaUno()
                break;
            case 2:
                tareaDos()
                break;
            case 3:
                tareaTres()
                break;
            default:
                console.log("El programa seleccionado no existe.")
                break;
        }
    }else{
        console.log('Debes elegir un numero del 1 al 10')
    }
    rl.close();
    });
}


// 1: imprima los números del 1 al 100
function tareaUno() {
    let numero = 0;
    while (numero <= 100) {
        console.log(numero);
        numero++
    }
}

    
// 2: imprima los números PARES del 1 al 100
function tareaDos() {
    let numero = 0
    while (numero <= 100){ //mientras numero sea menor o igual a 100 se ejecutará el ciclo 
        numero++; //incrementa el valor de numero en 1
        if(numero % 2 == 0  //si el residuo de la división de numero entre 2 es 0
            && numero !== 0)  //y numero no es 0
                console.log(numero) // imprime el numero
        }
     } 


// 3: imprima los números IMPARES del 1 al 100
function tareaTres() {
    let numero = 0
    while (numero <= 100){ //mientras numero sea menor o igual a 100 se ejecutará el ciclo 
        numero++; //incrementa el valor de numero en 1
        if(numero % 2 != 0  //si el residuo de la división de numero entre 2 es diferente de 0
            && numero !== 0  //y numero no es 0
            && numero <= 100){ // y numero es menor o igual a 100
                console.log(numero) // imprime el numero
        }
     }
}
ejecutaTarea()