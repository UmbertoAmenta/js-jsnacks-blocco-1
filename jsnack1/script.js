/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore*/

// Richiesta primo numero
let numOne = parseInt(prompt("Prego, inserire il primo dei due numeri"))
while (isNaN(numOne)) {
    alert("leggi con attenzione")
    numOne = parseInt(prompt("Prego, inserire il primo dei due NUMERI"))
}
console.log(numOne)

// Richiesta secondo numero
let numTwo = parseInt(prompt("ora un secondo numero"))

while (isNaN(numTwo)) {
    alert("ci sei o ci fai? stai concentrato")
    numTwo = parseInt(prompt("ho chiesto un NUMERO"))
}
console.log(numTwo)

// Stampare il maggiore
if (numOne > numTwo) {
    console.log("il maggiore è", numOne)
    alert(numOne + " è più grande di " + numTwo)
} else if (numTwo > numOne) {
    console.log("il maggiore è", numTwo)
    alert(numTwo + " è più grande di " + numOne)
} else {
    console.log("è stato ripetuto lo stesso numero")
    alert("hai ripetuto lo stesso numero -.-'")
}