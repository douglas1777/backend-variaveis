//**C:** capital (valor inicial de uma dívida, empréstimo ou investimento)
let C = 1000;
//taxa de juros sem a conversão /100
let j = 12.5
//**i:** taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
const i = j / 100;
//**t:** período de tempo
let t = 5;
//**M:** montante (o capital acrescido dos juros, ou seja, Capital + Juros)
const M = C * (1 + i) ** t;

console.log("Capital: R$" + C + "\nTaxa de juros: " + j + '%' + "\nPeríodo de tempo: " + t + " meses\nMontandte: R$" + M.toFixed(2))

