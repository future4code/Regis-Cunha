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

console.log("Meu nome é", nome, "tenho", idade, "anos, e o meu email é", email)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
const primeiraCor = prompt("Digite sua cor favorita.")
const segundaCor = prompt("Digite sua segunda cor favorita.")
const terceiraCor = prompt("Digite sua terceira cor favorita.")

arrayCores = [primeiraCor, segundaCor, terceiraCor]

console.log(arrayCores)
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
  const primeiraPalavra = prompt("Digite uma palavra")
  const segundaPalavra = prompt("Digite outra palavra")
  
  resultado = primeiraPalavra.length === segundaPalavra.length
  
  console.log(resultado)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
<<<<<<< HEAD
  const primeiraPalavra = prompt("Digite uma palavra")
=======
   const primeiraPalavra = prompt("Digite uma palavra")
>>>>>>> 8c5ecbe0bc32cc5de5f18a7a32066bdb55266043
  const segundaPalavra = prompt("Digite outra palavra")
  
  fraseIgual1 = primeiraPalavra.toLowerCase()
  fraseIgual2 = segundaPalavra.toLowerCase()
  resultado = fraseIgual1 === fraseIgual2
  
  console.log(resultado)
}

// Exercício 10
function checaRenovacaoRG() {
const anoAtual = prompt("Olá, digite o ano atual!")
  const anoNascimento = prompt("Digite agora o seu ano de nascimento.")
  const anoId = prompt("Digite aqui a data de expedição da sua Identidade.")

  idade = anoAtual - anoNascimento
  validadeRg = anoAtual - anoId

  resultado1 = idade <= 20 && validadeRg >= 5
  resultado2 = idade > 20 && idade <= 50 && validadeRg >= 10
  resultado3 = idade >= 50 && validadeRg >= 15
  console.log(resultado1 || resultado2 || resultado3)
}



// Exercício 11
function checaAnoBissexto() {
<<<<<<< HEAD
  const entradaAno = Number(prompt("Digite um ano para saber se é Bissexto!"))
=======
 const entradaAno = Number(prompt("Digite um ano para saber se é Bissexto!"))
>>>>>>> 8c5ecbe0bc32cc5de5f18a7a32066bdb55266043
 
  anoBissexto = entradaAno % 400 === 0 === true || entradaAno % 4 === 0 === true && entradaAno % 100 === 0 === false 
  
  
  console.log(anoBissexto)
<<<<<<< HEAD
  
} 


// Exercício 12
function checaValidadeInscricaoLabenu() {
 
=======
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  
>>>>>>> 8c5ecbe0bc32cc5de5f18a7a32066bdb55266043
  const idade = prompt("Voce é maior de 18 anos?")
  const ensinoMedio = prompt("Possui ensino médio completo?")
  const disponibilidade = prompt("Possui disponibilidade exclusiva durante os horários do curso?")
  
  maiorIdade = idade === "sim"
  ensinoCompleto = ensinoMedio === "sim"
  horarioAprovado = disponibilidade === "sim"
  
  aprovado = maiorIdade && ensinoCompleto && horarioAprovado
  
  console.log(aprovado)
}
<<<<<<< HEAD







=======
}
>>>>>>> 8c5ecbe0bc32cc5de5f18a7a32066bdb55266043
