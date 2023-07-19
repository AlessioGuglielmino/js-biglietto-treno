let age = prompt("inserisci la tua età");
let km = prompt("inserisci quanti chilometri vuoi percorrere");
let price = km * 0.21;

if (age < 18) {
  price = price - (price / 100) * 20;
} else if (age > 65) {
  price = price - (price / 100) * 40;
}

console.log(price);
document.getElementById("price").innerHTML =
  "il prezzo del biglietto è: €" + price.toFixed(2);
