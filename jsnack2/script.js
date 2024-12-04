/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

// Lista di invitati
const invit = [
    "Giangiorgio",
    "Filippo",
    "Tommaso",
    "Gaia",
    "Walter",
    "Roberto"
]

// Chiedere il nome dell'utente
const name = prompt("Inserisci il tuo nome")

// Comunicare se può partecipare o no
let canEnter = false
for (let i = 0; i < invit.length; i++) {

    if (invit[i].toLowerCase() === name.toLowerCase()) {
        canEnter = true
    }
}

if (canEnter) {
    alert("Il grande Gatsby sarà lieto di rivederti")
} else {
    alert("E chi saresti? Non hai il permesso di entrare, smamma")
}