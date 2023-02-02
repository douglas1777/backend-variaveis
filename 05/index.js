//Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano: 
//d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2} $
let x2 = Math.floor(Math.random() * 5);
let x1 = Math.floor(Math.random() * 5);
let y2 = Math.floor(Math.random() * 5);
let y1 = Math.floor(Math.random() * 5);

const quad = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log("A distancia entre o ponto a e b é: " + quad)