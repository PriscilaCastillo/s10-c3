// EJERICICIO 1

// calcular el promedio de los examens

// const promedio = (a, b, c, d) => {
//     let promedio = (a+b+c+d)/4
//     return promedio;
// }

// console.log(promedio);

// EJERCICIO 2
// Calcular el área de un rectángulo

// const a_rectangulo = (a,b) => {
//     let a_rectangulo = a*b;
//     return a_rectangulo;
// }

// console.log(a_rectangulo(2,3));

// // EJERCICIO 3
// // Calcular el área de un triángulo

// const a_triagunulo = (b,h) => {
//     let area = (b*h)/2;
//     return area;
// }

// console.log(a_triagunulo(6,3));

// EJERICIO 5
// Calcular el área de una circunferencia (π = 3.14)

// const pi = 3.14;

// const a_circulo = (r) => {
//     area = pi * r * r
//     return area;
// }

// console.log(a_circulo(2));

// // EJERCICIO 5

// // Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre. (8h diarias y 7 días por semana)

// const funSueldoSemanal = (pago_hora) => {
//     const h_diarias = 8;
//     const dias_semana = 7;
//     let sueldosemanal = h_diarias * dias_semana * pago_hora;
//     return sueldosemanal;
// }

// console.log(funSueldoSemanal(2));

// //EJERCICIO 6

// const convertirSolesaDolares = (soles) => {
//     const tipo_cambio = 3.73;
//     let cambio_en_dolares = soles / tipo_cambio;
//     return cambio_en_dolares.toFixed(2);
// }

// console.log(convertirSolesaDolares(40));

//EJERCICIO 7

// const entrada = [4, 8, 5, 3];

// const Ultimoelemento = (a) => {
//     return a[a.length - 1];
// }

// console.log(Ultimoelemento(entrada));

//EJERCICIO 8

// const arreglo = [2, 7, 5, 11];
// const numero = 9;

// const nuevoArreglo = [...arreglo,numero];

// console.log(nuevoArreglo);

// EJERCICIO 9

// const entrada = [2, 6, 1, 8];

// let suma = 0;

// const promedio = (arreglo) => {
//     for(let i = 0; i < arreglo.length; i++){
// suma = suma + arreglo[i];
//     }
//     return suma/arreglo.length;
// }

// console.log(promedio(entrada));

//EJERCICIO 10

// const entrada = [1, 2, 5, 8, 9, 12, 2, 3];

// const funSumPares = (arreglo) => {
//     let sumPares = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] % 2 === 0) {
//             sumPares = sumPares + arreglo[i];
//         }
//     }
//     return sumPares;
// }

// console.log(funSumPares(entrada)); 

// EJERCICIO 11

// const pares = [2, 4, 6, 5, 8, 2, 7];
// const letras = ['a', 'b', 'c'];

// const booleanoArray = (arreglo1, arreglo2) => {
//     const arregloNuevo = [...arreglo1, ...arreglo2];
//     if(arregloNuevo.length>=10){
//         return true;
//     }
//     return false; 
// }

// console.log(booleanoArray(pares, letras));

// EJERCICO 12

// const a = [2, 5, 2]
// const b = [1, 5, 3]

// const Array = (arreglo1, arreglo2) => {
//     const arregloNuevo = [...arreglo1, ...arreglo2];
//     let dobleArregloNuevo = [];
//     for (let i = 0; i < arregloNuevo.length; i++) {
//         dobleArregloNuevo[i] = arregloNuevo[i] * 2;
//     }
//     return dobleArregloNuevo;
// }

// console.log(Array(a,b));

// EJERCICIO 13

// let personas = [
//     { nombre: 'boris', hobby: 'correr', salario: 2000 },
//     { nombre: 'luis', hobby: 'cantar', salario: 1500 },
//     { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
//     { nombre: 'percy', hobby: 'cantar', salario: 1100 },
//     { nombre: 'rosa', hobby: 'leer', salario: 3000 },
// ];

// // let filtro = personas.filter((persona) => {
// // return persona.salario > 1200
// // })

// // Para que salgan solo los nombres
// let filtro = personas.filter((persona) => {
// return persona.salario > 1200
// })

// filtro.forEach((a)=>{
//     console.log(a.nombre);
// })


//EJERCICIO 14

// let turnos = [
//     { nombre: 'maria', dia: 'lunes' },
//     { nombre: 'luis', dia: 'martes' },
//     { nombre: 'antonia', dia: 'miercoles' },
//     { nombre: 'pedro', dia: 'jueves' },
//     { nombre: 'marisa', dia: 'viernes' },
// ]

// function consulta(dia, arreglo) {
//     let persona = 'No hay servicio';
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i].dia === dia) {
//             persona = arreglo[i].nombre;
//         }
//     }
//     return persona;
// }

// let consulta_por_dia = prompt('Ingrese el dia');

// console.log(consulta(consulta_por_dia, turnos));


//EJERCICIO 15

let precios = [
    { producto: 'monitor', precio: '$ 200' },
    { producto: 'teclado', precio: '$ 20' },
    { producto: 'raton', precio: '$ 10' },
]

const consulta = (producto, arreglo) => {
    let price = 'No tenemos, pregunte a la vuelta';
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].producto === producto) {
            price = arreglo[i].precio;
        }
    }
return price;

}

let productito = prompt('Que se va a llevar, casherito?')

console.log(consulta(productito, precios));

//Tiene que existir productito.
console.log(`Este es el texto de comillas chuecas ${productito} texto texto`);