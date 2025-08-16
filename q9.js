let frase = "Aprender JavaScript é divertido";
let palavras = frase.split(" ");
let soma = 0;

for (let p of palavras) {
    soma += p.length;
}
console.log("Soma dos tamanhos:", soma);