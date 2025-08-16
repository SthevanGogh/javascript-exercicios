let a = 10;
let b = 15;
let c = 16;

let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log("A área do triângulo é: " + area);