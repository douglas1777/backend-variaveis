/*# Exercício 08
## Calculo do perímetro e área de um círculo
Faça um programa que, a partir do raio de um círculo, calcula o comprimento (C) e a área (A) deste círculo.
 Esses valores são obtidos pelas fórmulas:
$$ C = 2piR$$
$$ A = piR^2 $$
Onde:
**C:** comprimento do círculo \
**A:** área do círculo \
**R:** raio do círculo
#### Exemplo:
Para um círculo com $R = 1$, os valores de $C$ e $A$ são:
$$ C = 2pi1$$
$$ C ≅ 6,3 $$
$$ A = piR^2 $$
Obs: não tem com o resultado de A ser ≅ 6,3 tendo em vista que R = 1
$$ A ≅ 6,3 $$*/
let R = Math.floor(Math.random() * 10);;
let C = 2 * Math.PI * R;
/*Apenas para ficar mais completo inseri o diametro
$$ d=2·r*/
let D = 2 * R
let A = Math.PI * R ** 2
console.log(`O raio do círculo é: ${R}\nO comprimento do círculo é ${C.toFixed(3)}\nA área do círculo é ${A.toFixed(3)}
O Diâmetro do círculo é ${D.toFixed(3)}`)
