/* Exercício 1 - Transformar valores de variáveis A = B, B = C e C = A
Exercício 2 - Transformar valores de variáveis A = C, B = A e C = B sem utilizar uma variável temporária
*/ 

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemporaria = varA;
varA = varB;
varB = varC;
varC = varATemporaria;

console.log(varA, varB, varC);

let varA2 = 'A'; // C
let varB2 = 'B'; // A
let varC2 = 'C'; // B

[varA2, varB2, varC2] = [varC2, varA2, varB2]

console.log(varA2, varB2, varC2)