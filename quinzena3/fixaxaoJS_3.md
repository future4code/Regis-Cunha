function calculaNota(ex, p1, p2) {
  
let resumo = ex + p1 + p2
let total = resumo / 3

  if (total >= 9){
  console.log("Sua nota é A")
 }

 else if (total >= 7.5){
   console.log("Sua nota é B")
 }
   else if (total < 7.5 && total >= 6){
   console.log("Sua nota é C")
 }
 else {
console.log("Sua nota é D")
 }
}

calculaNota(10,10,6)