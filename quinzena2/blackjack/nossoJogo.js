/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Bem vindo ao jogo de Blackjack!")

if(confirm("Deseja iniciar uma nova rodada?")) {
   console.log("iniciando uma nova rodada")
}

else {
   console.log("O jogo acabou")
}

let primeiraCartaUsuario = comprarCarta()
let segundaCartaUsuario = comprarCarta()
let primeiraCartaComputador = comprarCarta()
let segundaCartaComputador = comprarCarta()

totalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
totalComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

console.log("Usúario - Cartas:", primeiraCartaUsuario.texto, segundaCartaUsuario.texto, 
"- Pontuação:", totalUsuario)

console.log("Computador - Cartas:", primeiraCartaComputador.texto, segundaCartaComputador.texto, 
"- Pontuação:", totalComputador)

if(totalUsuario > totalComputador) {
   console.log("O usúario ganhou!")
}

else if(totalUsuario < totalComputador) {
   console.log("O computador ganhou!")
}
    
else {
   console.log("Empate!")
}

