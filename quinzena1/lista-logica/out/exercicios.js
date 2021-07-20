// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
const num1 = prompt("Digite a Altura do Retângulo.")
const num2 = prompt("Digite a Largura do Retângulo")

console.log(Number(num1) * Number(num2))
}

// Exercício 2
function imprimeIdade() {
  const num1 = prompt("Qual é o ano atual?")
  const num2 = prompt("Qual é o seu ano de nascimento?")
  
  console.log(Number(num1) - Number(num2))
}

// Exercício 3
function calculaIMC() {
  const num1 = prompt("Qual é o seu peso")
  const num2 = prompt("Qual é a sua altura?")
  
  console.log(Number(num1) / (Number(num2) * Number(num2)))
  
}

// Exercício 4
function imprimeInformacoesUsuario() {
const nome = prompt("Digite aqui o seu nome!")
const idade = prompt("Digite a sua idade!")
const email = prompt("Digite o seu email!")

console.log("Meu nome é", (nome),", tenho",(idade), " anos, e o meu email é ", (email))
}

// Exercício 5
function imprimeTresCoresFavoritas() {
const primeiraCor = prompt("Digite sua cor favorita.")
const segundaCor = prompt("Digite sua segunda cor favorita.")
const terceiraCor = prompt("Digite sua terceira cor favorita.")

console.log(primeiraCor),", ", (segundaCor), ", ", (terceiraCor)
}

// Exercício 6
function retornaStringEmMaiuscula() {
let vocabulario = prompt("Digite aqui!")

console.log(vocabulario.toUpperCase(vocabulario))
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const custoDoEspetaculo = prompt("Valor do Investimento.")
  const custoDoIngresso = prompt("Valor do Ingresso.")
  
  console.log(Number(custoDoEspetaculo) / (Number(custoDoIngresso)))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  const anoAtual = prompt("Olá, digite o ano atual!")
  const anoNascimento = prompt("Digite agora o seu ano de nascimento.")
  const anoId = prompt("Digite aqui a data de expedição da sua Identidade.")
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}