/*
 * Exercício 1: Crie uma constante chamada "nome", e uma constante chamada "sobrenome" e atribua o seu nome e sobrenome a elas.
 * Exercício 2: Crie uma constante chamada "idade" e atribua a sua idade a ela.
 * Exercício 3: Crie uma constante chamada "altura" e atribua a sua altura a ela.
 * Exercício 4: Crie uma constante chamada "peso" e atribua o seu peso a ela.
 * Exercício 5: Crie uma variável chamada "indiceMassaCorporal" e atribua a ela o resultado do cálculo do seu IMC (peso / (altura * altura)).
 * Exercício 6: Descubra o ano de nascimento a partir da idade e do ano atual (2026) e atribua a uma constante chamada "anoNascimento".
 * Exercício 7: No console.log da altura, imc e ano de nascimento utilizar template strings para exibir a mensagem.
 */

const nome = "Lucas";
const sobrenome = "Brugnago da Maia";
const idade = 30;
const alturaEmMetros = 1.70;
const peso = 70;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2026 - idade;

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`); // template string
console.log(`${nome} nasceu em ${anoNascimento}.`);