/*Desafío final: 
Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con 
solo los números pares utilizando funciones.  */
function pares(arreglo) {
    function par(num) {
        return num % 2 === 0;
    }

    return arreglo.filter(par);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
const numpar = pares(num);

console.log(numpar);
