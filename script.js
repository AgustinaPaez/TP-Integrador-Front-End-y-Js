//valor del ticket

const ticket = 200;

//descuento por categoría
//lo multiplico por el valor que me quedaria ya con el descuento correspondiente
//si es 80% el descuento solo pago el 20%, si es 50% de descuento solo pago el otro 50%,
//y si es 15% el descuento entonces pago el 85% de la cantidad de la compra

let descEstudiante = ticket * 0.2;
let descTrainee = ticket * 0.5;
let descJunior = ticket * 0.85;

//console.log(descJunior);

//funcion para pagar la cantidad de tickets con su correspondiente descuento
const cantidad = document.getElementById("Cantidad");
const categoria = document.getElementById("Categoria");
const calcular = document.getElementById("Calcular");
const reset = document.getElementById("Reset");
const pagar = document.getElementById("totalPagar");

function totalPago() {
  let totalvalor = cantidad.value * ticket;

  if (categoria.value == 1) {
    totalvalor = cantidad.value * descEstudiante;
  } else if (categoria.value == 2) {
    totalvalor = cantidad.value * descTrainee;
  } else if (categoria.value == 3) {
    totalvalor = cantidad.value * descJunior;
  }
  pagar.innerHTML = `Total a Pagar: $ ${totalvalor}`;
}

calcular.addEventListener("click", totalPago);
reset.addEventListener("click", () => {
  pagar.innerHTML = `Total a Pagar: $`;
});

//practicar validaciones y alertas
