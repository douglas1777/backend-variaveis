//Suponha que você está trabalhando no Ministério da Saúde e está trabalhando num simulador de casos de COVID-19. 
//Seu trabalho é fazer um programa que calcula qual será o total de pessoas infectadas a partir de 3 variáveis.

//**Po =** a população incial de pessoas infectadas \
//**X =** quantidade de pessoas para as quais um paciente infectado pode transmitir \
//**t =** tempo percorrido

//Para isso, utiliza-se a fórmula seguinte:
//$$ P = Po \* x ^\frac{t}{7} $$

let Po = Math.floor(Math.random() * 1000);
let x = 7;
let t = Math.floor(Math.random() * 10);
const P = Po * (x ** (t / x));
console.log(`
Nº inicial de pessoas infectadas: ${Po} pessoas
quantidades de pessoas que um paciente pode transmitir: ${x} pessoas
tempo percorrido: ${t} dias
Total de pessoas infectadas com COVID-10 a partir dos dados acima: ${Math.floor(P)} pessoas
`);

