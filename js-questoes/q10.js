let nome = "Alan Mathison Turing";
let partes = nome.split(" ");
let resultado = "";

for (let i = 1; i < partes.length; i++) {
    resultado += partes[i][0] + ". ";
}
resultado += partes[0];

console.log(resultado);