//valor do produto
let a = Math.floor(Math.random() * 1000);
//porcentagem do valor do produto 100%
let b = 100;
//dinheiro que tenho e quero desconto correspondente a grana que posso pagar
const c = Math.floor(Math.random() * 1000);
//calculo de % correspondente ao produto
const d = (c * b) / a;
// desconto em %
const desconto = b - d;
//desconto em dinheiro
const desconto1 = a - c;

console.log("O produto custa R$" + a + " Você tem R$" + c.toFixed(2) + " e esse valor corresponde a " + d.toFixed(2) + "% do valor do produto" +
    "\nPara comprar esse produto você precisa é de " + desconto.toFixed(2) + '%' + " de desconto, ou R$" + desconto1.toFixed(2) +
    " de desconto para comprar esse produto com os R$" + c.toFixed(2) + " que você tem")
