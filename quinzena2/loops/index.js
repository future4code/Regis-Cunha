// Exercícios de interpretação de código
// 1) O que o código abaixo está fazendo? Qual o resultado impresso no console?
// R: O codigo abaixo está representando um contador de voltas, onde ele entra em um looping
// e irá marcar até 5 voltas.

// 2) Leia o código abaixo:
// a) O que vai ser impresso no console?
// R: Será impresso no console numeros do array maiores que 18 ou seja: 19, 21, 23, 25, 27, 30.

// b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente?
//  Se sim, o que poderia ser usado para fazer isso?
// R: Não será possível acessar o ìndice do array

// 3 )Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
// R: Entrará num looping infinito.


// Exercícios de escrita de código
// 1) Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde
//  esses nomes em um array.
// Dica: Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes 
// que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// c) Por fim, imprima o array com os nomes dos bichinhos no console.

// let pet = prompt("Quantos pets vc tem?")


// for (let quantidade = 0; quantidade < pet; quantidade++) {
//     let nomeDosPets = []
   
// let nomeDosBichinhos = prompt("Digite os nomes dos pets") 
//     console.log(nomeDosBichinhos)

//     nomesDosPets = nomeDosBichinhos
//     console.log(nomeDosPets)
// }


// 2) Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente 
// de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações
//  pedidas:
// a) Escreva um programa que **imprime** cada um dos valores do array original.

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original 
// e **imprima** esse novo array

// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do 
// índex `i` é: `numero`". Depois, **imprima** este novo array.

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// function valoresArrayOriginal() {
//      console.log(arrayOriginal)
// }
// valoresArrayOriginal()

// function valoresArrayOriginalDividido(){
//    divisao = arrayOriginal / 10
//    console.log(divisao)
// }
// valoresArrayOriginalDividido()

// function novoArrayPares (array) {
//     for ( let i = 0; i < arrayOriginal; i++) {
//         let numerosPares = []
//         if (array[i] % 2 === 0){
//             novoArrayPares.push(array[i])
//         }
//     }
//     console.log(arrayOriginal)
// }
// novoArrayPares()

// function arrayStrings (i, numero) {
//     console.log("O elemento do index", "é número",)
// }
// arrayStrings()

// const valorMaiorMenor = (array) => {
//     let maior = 0
//     for (numero of array) {
//         numero > maior ? (maior = numero) : false
//     }

//     let menor = maior
//     for (numero of array) {
//         numero < menos ? (menor = numero) : false 
//     }
//     console.log(`O mais valor do array é ${maior} e o menor é ${menor}`)
//     }

//     valorMaiorMenor()


