let M = 14004.84;
let C = 2855.64;
let n = 96;
const i = (Math.pow(M / C, 1 / n) - 1) * 100;
const j = i * 100;
console.log(`O seu financimento de R$${C.toFixed(2)}  teve uma taxa de juros 
de ${i.toFixed(
  3
)}% ao mês, pois após ${n} meses você teve que pagar R$${M.toFixed(2)}`);
