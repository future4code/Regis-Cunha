// EXERCÍCIO 01
function inverteArray(array) {
let arrayInvertido = []
for (let i = array.length-1; i >= 0; i--){
  arrayInvertido.push(array[i])
}
return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
let arrayPares = array.filter((pares, indice, array) => {
  return pares % 2 === 0
})
let arrayElevados = arrayPares.map((elevados, indice, array) => {
  return elevados **2
})
return arrayElevados
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPares = array.filter((pares, indice, array) => {
    return pares % 2 === 0
  })
  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
let maior = -Infinity
  for( let i = 0; i< array.length; i++){
  if (array[i] > maior){
    maior = array[i]
  }}
return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  quantidadeArray = array.length
  return quantidadeArray
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
const respostas = [false, false, true, true, true]
return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  pares = []
  contador = 0
  n1=0
  while (contador != n){
    if (n1%2==0){
        contador = contador + 1
        pares.push(n1)
    }
    n1 = n1+1
  }
  return pares
}
// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a === b && b === c) {
    console.log("Equilátero")
  } else if (a !== b && b !== c && c !== a) {
    console.log("Escaleno")
  } else {
    console.log("Isósceles")
  }
  return checaTriangulo()
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
const numero1 = {
  maiorNumero : num1,
  maiorDivisivelporMenor : num1 % num2 === 0,
  diferenca : num1 / num2
}

const numero2 = {
  maiorNumero : num2,
  maiorDivisivelporMenor : num2 % num1 === 0,
  diferenca : num2 / num1
}

  if (num1 > num2){
  console.log(numero1.maiorNumero, numero1.maiorDivisivelporMenor, numero1.diferenca)
}
else if (num2 > num1){
  console.log(numero2.maiorNumero, numero2,maiorDivisivelporMenor, numero2.diferenca)
}
else if ( num1 = num2){
  console.log(`Os números são iguais`)
}
return comparaDoisNumeros()
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maior = -Infinity
  for( let i = 0; i< array.length; i++){
  if (array[i] > maior){
    maior = array[i]

    let segundoMaior = maior-1
  }}
return segundoMaior
}

// EXERCÍCIO 11
function ordenaArray(array) {
for (let last = array.length-1; last > 0; last--){
  for (let i = 0; i < last; i++) {
    if (array[i] > array[i+1]) {
      [array[i], array[i+1]] = [array[i+1], array[i]]
    }
  }
}
return array
}

// EXERCÍCIO 12
function filmeFavorito() {
const filmeFavoritoAstrodev = {
  nome: "O Diabo Veste Prada",
  ano: 2006,
  diretor: "David Frankel",
  atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
}
return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  const filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
return `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por 
${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores[0]}, ${filmeFavoritoAstrodev.atores[1]}
, ${filmeFavoritoAstrodev.atores[2]}, ${filmeFavoritoAstrodev.atores[3]}.` 
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const parametrosDoTriangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2
}
return parametrosDoTriangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const character = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4"
  }
  const pessoaAnonima = {
    nome: "ANÔNIMO"
  }

  return `nome:" ${pessoaAnonima.nome}, "idade": ${character.idade}, "email:" ${character.email}, "endereco:"
   ${character.endereco}.`
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
