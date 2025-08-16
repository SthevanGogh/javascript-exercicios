let frase = "Hoje é um dia maravilhoso";
let palavras = frase.split(" ");
let novaFrase = palavras.map(p => {
    if (p.length < 5) {
        return p.toUpperCase();
    } else {
        return p.toLowerCase();
    }
});
console.log(novaFrase.join(" "));