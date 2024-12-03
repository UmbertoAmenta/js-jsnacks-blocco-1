/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore*/

// Richiesta primo numero
const numOne = prompt("Prego, inserire il primo dei due numeri")
console.log(numOne)

// Richiesta secondo numero
const numTwo = prompt("ora un secondo numero")
console.log(numTwo)

// Stampare il maggiore
if (numOne > numTwo) {
    console.log("il maggiore è", numOne)
} else {
    console.log("il maggiore è", numTwo)
}