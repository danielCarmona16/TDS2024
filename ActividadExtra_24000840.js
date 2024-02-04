var carta1 = Math.floor(Math.random() * 11) + 1
var carta2 = Math.floor(Math.random() * 11) + 1
var cartacompu1 = Math.floor(Math.random() * 11) + 1
var cartacompu2 = Math.floor(Math.random() * 11) + 1
var sumatotal1 = carta1 + carta2
var sumatotal2 = cartacompu1 + cartacompu2

alert("Carta 1: " + carta1 + " Carta 2: " + carta2 + " Su total es: " + sumatotal1)
console.log("Carta 1 computadora: " + cartacompu1
    + " Carta 2 computadora: " + cartacompu2 + " Total: " + sumatotal2)

var quiereCarta = "SI"

while (quiereCarta.toUpperCase ()== "SI" && sumatotal1 < 21) {
    quiereCarta = prompt("Quieres una carta extra? Si o No ")
    if (quiereCarta.toUpperCase() == "SI") {
        var cartaExtra = Math.floor(Math.random() * 11) + 1
        sumatotal1 = sumatotal1 + cartaExtra
        alert("Su nueva carta es: " + cartaExtra + " Su nuevo total es: " + sumatotal1)
    }
}

if(sumatotal1 == sumatotal2) {
    alert("Empate")
} else if (sumatotal1 > 21) {
    alert("Perdiste")
} else if (sumatotal2 > 21) {
    alert("Ganaste")
} else if (sumatotal1 > sumatotal2) {
    alert("Ganaste")
} else {
    alert("Perdiste")
}