//-----------DECLARACION DE CONST Y NODOS--------------

const form$$ = document.querySelector("form");
let name$$ = form$$.querySelector(".starshipname");
let class1$$ = form$$.querySelector(".class1");
let stars$$ = form$$.querySelector(".stars");
let description$$ = form$$.querySelector(".description");
let image$$ = form$$.querySelector(".image");
//------------AÑADIR EVENTO DE SUBIR EL FORMULARIO DE MANAGE------------
form$$.addEventListener("submit", (sub) => {
  sub.preventDefault();

  const newProduct = {
    name: name$$.value,
    class1: class1$$.value,
    stars: stars$$.value,
    description: description$$.value,
    image: image$$.value,
  };
  //----------COMPARAR SI ESTA SUBIDO O SE ESTA EDITANDO--------------
  if (numId) {
    updateProduct(newProduct);
  } else {
    addProduct(newProduct);
  }
  resetInputs();
});

function resetInputs() {
  name$$.value = "";
  class1$$.value = "";
  stars$$.value = "";
  description$$.value = "";
  image$$.value = "";
}

function addProduct(newProduct) {
  fetch("http://localhost:3000/ships/", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newProduct),
  });
}

function updateProduct(newProduct) {
  fetch("http://localhost:3000/ships/" + numId, {
    method: "PUT",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newProduct),
  });
}

let numId;
let selectedShip;

function catchID() {
  const urlParams = new URLSearchParams(window.location.search);
  numId = urlParams.get("id");
}

function searchShip(ships) {
  selectedShip = ships.find((ship) => ship.id === Number(numId));

  console.log(selectedShip);
}

function loadShip() {
  name$$.value = selectedShip.name;
  class1$$.value = selectedShip.class1;
  stars$$.value = selectedShip.stars;
  description$$.value = selectedShip.description;
  image$$.value = selectedShip.image;
}

if (window.location.href.includes("?id=")) {
  catchID();
  fetch("http://localhost:3000/ships/")
    .then((res) => res.json())
    .then((ships) => {
      //console.log(ships);
      //printships(ships);
      searchShip(ships);
      loadShip();
    });
}
