// Exercícios de interpretação de código:
// 1) Leia o código abaixo:
// a) O que será impresso no console?
// R: Imprimiu o array mapeado devido a função.

// 2) Leia o código abaixo:
// a) O que será impresso no console?
// R: Será impresso apenas os nomes do array em um novo.

// 3) Leia o código abaixo:
// a) O que vai ser impresso no console?
// R: Retornou todos os apelidos diferentes de Chijo.


// Exercícios de escrita de código:
// 1) Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas
//  nos itens abaixo utilizando as funções de array map e filter:

// a)a) Crie um novo array que contenha apenas o nome dos doguinhos

// b) Crie um novo array apenas com os [cachorros salsicha]

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem
//  deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"


// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  const novoArray = (doguinho, indice, array) => {
//      return doguinho.nome
//  }
// const nomeDosDoguinhos = pets.map(novoArray)
// console.log(nomeDosDoguinhos)

// const cachorrosSalsicha = pets.filter((doguinho, indice, array) => {
// return doguinho.raca === "Salsicha"
// })
// console.log(cachorrosSalsicha)

// const promocaoPoodles = pets.filter((doguinho, indice, array) => {
// return doguinho.raca === "Poodle"
// })
// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a", promocaoPoodles)


// 2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções
//  de array map e filter:
//  a) Crie um novo array que contenha apenas o nome de cada item

//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em 
//  todos eles
 
//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 
//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

//  e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases 
//  apenas dos itens cujo nome contenha a palavra "Ypê".

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const novoArrayItens = (item, indice, array) => {
         return item.nome
     }
    const nomeDosItens = produtos.map(novoArrayItens)
    console.log(nomeDosItens)

   
    const novoArrayPrecos = (item, indice, array) => {
        console.log(produtos.nome, produtos.preco - produtos.preco * 00,5)  
        return item.preco
    }
    const precos = produtos.map(novoArrayPrecos)
    console.log(precos)


const categoriaBebidas = produtos.filter((bebidas, indice, array) => {
    return bebidas.categoria === "Bebidas"
})

    console.log(categoriaBebidas)


    const itensYpe = produtos[6]
    const itensYpe2 = produtos[9]
    console.log(itensYpe, itensYpe2)

    
    console.log("Compre o item por:", itensYpe, "Aproveite também essa promoção", itensYpe2)