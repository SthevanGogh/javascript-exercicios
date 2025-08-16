let numeros = [1, 2, 2, 3, 3, 3, 4, 4];
let contador = {};
let maxNum = numeros[0];
let maxQtd = 0;

for (let num of numeros) {
    contador[num] = (contador[num] || 0) + 1;
    if (contador[num] > maxQtd) {
        maxQtd = contador[num];
        maxNum = num;
    }
}

console.log("Número mais frequente:", maxNum);