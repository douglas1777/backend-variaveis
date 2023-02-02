//Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo tempo que passou, utilizando a fórmula abaixo.

//$$ Velocidade = \frac{distPercorrida}{tempo} $$

//deslocamento
let s = Math.floor(Math.random() * 1000);
//tempo
let t = Math.floor(Math.random() * 100);

const vm = (s / t) * 3.6;


console.log("Distância: " + s + "m\nTempo: " + t + "s\nA velocidade média percorrida é " + vm.toFixed(2) + "KM/h");
