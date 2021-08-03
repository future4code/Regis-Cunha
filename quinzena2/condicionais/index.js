// Exercícios de interpretação de código
// 1) a) Explique o que o código faz. Qual o teste que ele realiza? 
// R: O código em si serve para ser um divisor de numeros a escolha do
// usuário.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// R: Os numeros que passam no teste são os numeros divididos por 2 e igual a 0.

// c) Para que tipos de números a mensagem é "Não passou no teste"?
// R: Todo o restante incluindo numeros impares e primos.


// 2) a) Para que serve o código acima?
// R: O código acima serve para identificar os preços relacionados às
// frutas expostas para a venda.

// b) Qual será a mensagem impressa no console, se o valor de fruta for 
// `"Maçã"`?
// R: A menssagem impressa será: O preço da fruta  Maçã  é  2.25 R$.
//  preco

//  c) Considere que um usuário queira comprar uma `Pêra`, qual seria a 
// mensagem impressa no console se retirássemos o `break` que está logo
//  acima do `default` (o `break` indicado pelo comentário "BREAK PARA O
//   ITEM c.")?
//   R: A menssagem impressa seria o ultimo valor mencionado no codigo,
// pois o sistema não identificaria o devido valor da fruta "Pêra"


// 3) a) O que a primeira linha está fazendo?
// R: Solicitando ao usuário um número aleatório.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do 
// terminal? E se fosse o número -10?
// R: A menssagem será: esse número passou no teste, se o úsuario digitar 
// -10 será atribuido no código uma mensagem de "undefined", pois não 
// existe o else para complementar o código.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco
//  ou escopo.
// R: Haverá um erro sim, pois o console.log de "mensagem" está fora da 
// condicional "if", deste modo o console.log deveria estar junto com a
// condicional que esta sendo utilizada.


// Exercícios de escrita de código
// 1)1. Faça um programa que pergunta ao usuário qual a idade dele e 
// imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// let idade = Number(prompt("Qual é a sua idade?"))

// if (idade >= 18 ) {
//   console.log("Você pode dirigir!")
// }

// else if (idade <= 17) {
//   console.log("Você não pode digirir!")
// }
// else  {
//   console.log("Digite uma idade valida")
// }


// 2)Agora faça um programa que verifica que turno do dia um aluno estuda.
//  Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
//  Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
//   Utilize o bloco if/else.

// const turno = prompt(`Em qual turno você estuda? Digite M para (Matutino),
// V para (Vespertino) ou N para (Noturno)`)

// if (turno === "M") {
//   console.log("Bom dia!")
// }

// else if (turno === "V") {
//   console.log("Boa Tarde!")
// }

// else if (turno === "N") {
//   console.log("Boa Noite!")
// }

// else {
//   console.log("Digite um turno válido")
// }


// 3) Repita o exercício anterior, mas utilizando a estrutura de switch case 
// agora.

// const turno = prompt(`Em qual turno você estuda? Digite M para (Matutino),
//  V para (Vespertino) ou N para (Noturno)`)
 
//  switch (turno) {
//  case "M":
//  condicao = "Bom Dia!"
//  break

//  case "V":
//    condicao = "Boa Tarde!"
//    break

//    case "N":
//      condicao = "Boa Noite!"
//      break
     
//      default:
//        condicao = "Digite um turno válido!"
//  }

//  console.log(condicao)


// 4) Considere a situação: você vai ao cinema com um amigo ou amiga, porém
// ele/ela só assistirá a um filme com você se ele for do gênero fantasia 
// e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao
// usuário qual o gênero de filme que vão assistir e outra pergunta sobre
// o preço do ingresso, então verifique se seu amigo ou amiga vai topar
// assistir o filme. Caso positivo, imprima no console a mensagem:
// "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const genero = prompt("Qual o gênero do filme escolhido?")
// let valor = Number(prompt("Qual é o valor do ingresso?"))

// if (genero === "fantasia" && valor < 15) {
//   console.log("Bom filme!")
// }
  
// else if (genero !== "fantasia" && valor >= 15) {
//     console.log("Escolha outro filme :(")
//   }

//   else {
//     console.log("Digite uma mensagem adequada")
//   }
