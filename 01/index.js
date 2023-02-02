let P = 105;
let A = 1.70;
let i = P / (A * A)
console.log("O seu peso é: " + P + 'KG' + "\nA sua altura é: " + A + "M");
if (i < 18.5) {
    console.log("\n O seu IMC é: " + i + " e está abaixo do IMC ideal que é entre 18.5 e 24.9")
} else if (i >= 18.5 && i <= 24.9) {
    console.log("\n O seu IMC é: " + i + "está na faixa saudavél de IMC ")

} else if (i >= 25 && i <= 29.9) {
    console.log("\n O seu IMC é: " + i + " e você está com sobrepeso, procure um médico para acompanhá-lo"
        + " e evitar doenças causadas pelo excesso de peso")
} else if (i >= 30 && i <= 34.9) {
    console.log("\n O seu IMC é: " + i + " você está com obesidade  Grau I, procure um médico para acompanhá-lo"
        + " e evitar doenças causadas pela obesidade")
} else if (i >= 35 && i <= 39.9) {
    console.log("\n O seu IMC é: " + i + " você está com obesidade  Grau II(Severa), procure um médico para acompanhá-lo"
        + " e evitar doenças causadas pela obesidade")
} else if (i > 40) {
    console.log("\n O seu IMC é: " + i + " você está com obesidade  Grau III(Morbida), procure um médico para acompanhá-lo"
        + " e evitar doenças causadas pela obesidade")
}