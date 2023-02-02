//x²2
let a = Math.floor(Math.random() * 10);
//x
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);
//valor de Delta Δ = (b2 - 4.a.c)
const D = (b ** 2) - (4 * a * c)
//aplicando bhaskara (x = (-b +- √Δ)/2a)
//X1
const x1 = (-b + Math.sqrt(D)) / (2 * a)
//x2
const x2 = (-b - Math.sqrt(D)) / (2 * a)
if (D < 0) {
    console.log("Equação de segundo grau: \n" + a + "x²+" + b + "x+" + c + "=0" +
        "\nDelta= " + D + "\nNão há raízes reais para números negativos.")
} else {
    console.log("Equação de segundo grau: \n" + a + "x²+" + b + "x+" + c +
        "\nDelta " + D + "\nX1= " + x1 + "\nX2= " + x2)
}