import "./style.css";

let pokeramdom = () => {
  let arriba = ["♠", "♥", "♣", "♦"];
  let arribita = [Math.floor(Math.random() * arriba.length)];

  return arriba[arribita];
};

let numerandom = () => {
  let numero = ["7", "10", "A", "8"];
  let numerop = [Math.floor(Math.random() * numero.length)];

  return numero[numerop];
};

//agarrar los elementos de html
const arriba = document.getElementById("espadatop");
const numero = document.getElementById("number");
const abajo = document.getElementById("espadabajo");

// generar los aleatorios
let simboltop = pokeramdom();
let numerop = numerandom();

//modificar elemento
arriba.innerHTML = simboltop;
numero.innerHTML = numerop;
abajo.innerHTML = simboltop;
console.log(arriba);

if (arriba.innerHTML === "♥") {
  abajo.style.color = "red";
  arriba.style.color = "red";
} else if (abajo.innerHTML === "♦") {
  abajo.style.color = "red";
  arriba.style.color = "red";
} //else {
//}
