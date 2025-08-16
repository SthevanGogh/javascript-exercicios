let hoje = new Date();

let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

let diaSemana = dias[hoje.getDay()];
let hora = hoje.getHours().toString().padStart(2, "0");
let minuto = hoje.getMinutes().toString().padStart(2, "0");
let segundo = hoje.getSeconds().toString().padStart(2, "0");

console.log("Hoje é: " + diaSemana);
console.log("A hora atual é: " + hora + ":" + minuto + ":" + segundo);