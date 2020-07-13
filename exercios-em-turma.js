//----------------------------------------------------------------------

//QUESTÃO 1

/*Pergunte o nome da pessoa e retorne um alert com “Bem vindo + nome da pessoa”.
const nome = window.prompt(`Qual o seu nome?`);
window.alert(`Bem vindo ${nome}`);
*/

//---------------------------------------------------------------------

//QUESTÃO 2

/* Pergunte dois números e retorne um alert com a 
divisão dos mesmos. 
const valor1 = window.prompt(`Digite o primeiro valor`);
const valor2 = window.prompt(`Digite o segundo valor`);
const resultado = valor1 / valor2;
window.alert(`O resultado da divisão é ${resultado}`);*/

//---------------------------------------------------------------

//QUESTÃO 3

// Pergunte dois números e retorne o resto da divisão dos mesmos.

// const numero1 = window.prompt(`Digite um número`);
// const numero2 = window.prompt(`Digite outro número`);
// const result = numero1 % numero2
// window.alert(`O resto da divisão dos dois números é ${result}`);
//---------------------------------------------------------------------

//QUESTÃO 4

// Pergunte dois números e retorne par ou ímpar

/*const numero4 = window.prompt("Digite um número");
const numero5 = window.prompt("Digite outro número");

 let result1 = numero4 % 2 === 0 ? "O primeiro número é par" : "O primeiro número é ímpar";
 let result2 = numero5 % 2 === 0 ? "O segundo número é par" : "O segundo número é ímpar";


/*if (numero4 % 2 === 0){
  result1 = 'O primeiro número é par';
}else {
result1 = 'O  primeiro número é ímpar'
}

if (numero5 % 2 === 0){
 result2 = ' O segundo número é par'; 
}else { 
 result2 = 'O segundo número é ímpar'

window.alert(`${result1}, ${result2}`);
*/

//---------------------------------------------------------------

//QUESTÃO 5

// Pergunte dois números e retorne n1 elevado pelo n2.

/*const numero1 = window.prompt(` Digite um número`)
const numero2 = window.prompt(` Digite outro número`)
const resultado = numero1**numero2
window.alert(`O ${numero1} elevado pelo ${numero2} é ${resultado}`)
  */

//---------------------------------------------------------------

//QUESTÃO 6

//Pergunte dois números, faça a média. Se a média for maior que 5, retorne um alert “Aprovado!”
/* const numero1 = window.prompt(`Digite um número`);
const numero2 = window.prompt(`Digite outro número`);

let resultado = (Number.parseFloat(numero1) + Number.parseFloat(numero2)) / 2;

if (resultado > 5) {
  window.alert(`Sua nota é ${resultado} Você foi aprovado`);
} else {
  window.alert(`Sua nota é ${resultado} infelizmente você foi reprovado!`);
} */

//---------------------------------------------------------------

// QUESTÃO 7

/*  Pergunte dois números. Se forem iguais, retorne um alert 
 “Empate!”. Senão, faça um sorteio de 0 e 1.
 Se o 0 for sorteado, o número MAIOR entre os jogadores ganha.
Se o 1 for sorteado, o número MENOR entre os jogadores ganha. */

// rolê muito doido pra entender o math.random
/* function randomDeZeroAUm() {
  var numero = Math.floor(Math.random() * 2);
  return numero;
}
const valor3 = window.prompt(`Digite um valor`);
const valor4 = window.prompt(`Digite outro valor`);
if (valor3 === valor4) {
  console.log(`EMPATE`);
} else {
  let result = randomDeZeroAUm();
  if (result === 0) {
    if (valor3 > valor4) {
      console.log(`O MAIOR valor ganhou ${valor3}`);
    } else {
      console.log(`O MAIOR valor ganhou ${valor4}`);
    }
  }
  if (result === 1) {
    if (valor3 < valor4) {
      console.log(`o MENOR valor ganhou ${valor3}`);
    } else {
      console.log(`o MENOR valor ganhou ${valor4}`);
    }
  }
} */

//---------------------------------------------------------------

//QUESTÃO 8

/* Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não.
Para estar em condições, um dos seguintes requisitos deve ser satisfeito:
Ter no mínimo 65 anos de idade.
Ter trabalhado no mínimo 30 anos.
Ter no mínimo 60 anos
Ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código),
o ano de seu nascimento e o ano de seu ingresso na empresa.
O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer' */

/* let codigo = window.prompt(`Escreva o código do funcionario. Ex: ABC123`);
let txtidade = window.prompt(
  `Qual o ano de nascimento do funcionario Ex.: 2000`
);
let anoempresa = window.prompt(
  `Qual o ano que o funcionario ingressou na empresa? Ex: 2000`
);
let sexo = window.prompt(
  `Qual o sexo do funcionario? "M" para MASCULINO ou "F" para FEMININO.`
); 
let data = new Date();
let ano = data.getFullYear();
let idade = ano - Number.parseInt(txtidade);
let tempoEmpresa = ano - Number.parseInt(anoempresa);
/*  const res = getElementById("resposta"); 
if (sexo === "M" || sexo === "m") {
  if (idade >= 65 && anoempresa >= 30) {
    console.log(
      `Sua idade é ${idade}, você trabalhou ${tempoEmpresa} anos e você pode se aposentar!`
    );
  } else {
    console.log(
      `Seu código é ${codigo}, sua idade é ${idade}, você trabalhou ${tempoEmpresa} anos e você não pode aposentar!`
    );
  }
} else if (sexo === "F" || sexo === "f") {
  if (idade >= 60 && anoempresa >= 25) {
    console.log(
      `Seu código é ${codigo}, sua idade é ${idade}, você trabalhou ${tempoEmpresa} anos e você pode se aposentar!`
    );
  } else {
    console.log(
      `Seu código é ${codigo}, sua idade é ${idade}, você trabalhou ${tempoEmpresa} anos e você não pode se aposentar!`
    );
  }
}
*/
