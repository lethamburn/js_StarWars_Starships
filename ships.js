//json-server --watch db.json
const shipsUrl = "http://localhost:3000/ships";
const shipsnum = document.querySelector('[data-function="ships-num"]');
const disGallery = document.querySelector('[data-function="disGallery"]');
const disList = document.querySelector('[data-function="disList"]');

//---------------------FETCH EMPIRE------------------------------
fetch(shipsUrl)
  .then((res) => res.json())
  .then((ships) => {
    console.log(ships);
    printships(ships);
  });

//-------------------SELECCIONAR DIV CENTRAL-------------------------
const shipsDiv = document.querySelector('[data-function="ships"]');

function printships(ships) {
  for (const rebel of ships) {
    //--------------CREAR EL DIV INTERNO Y SUS CLASES--------------------
    const newDiv$$ = document.createElement("div");
    newDiv$$.classList.add("b-newDiv", "col-md-3");

    disGallery.addEventListener("click", () => {
      newDiv$$.classList.remove("b-newDiv", "col-md-12");
      newDiv$$.classList.add("b-newDiv", "col-md-3");
    });
    disList.addEventListener("click", () => {
      newDiv$$.classList.remove("b-newDiv", "col-md-3");
      newDiv$$.classList.add("b-newDiv", "col-md-12");
    });

    //newDiv$$.classList.add("b-newDiv", "col-md-3"); //CAMBIAR CLASES SEGUN BOTONES Y REMOVE AL ANTERIOR
    //---------------------ELEMENTOS DEL DIV-----------------------------
    newDiv$$.innerHTML = `<img class="b-newDiv__img" src=${rebel.image}>
    <h3 class="b-newDiv b-newDiv__name">${rebel.name}</h3><hr>
    <h2 class="b-newDiv b-newDiv_class">${rebel.class1}</h2>
    <p class="b-newDiv b-newDiv_description">${rebel.description}</p>
    <p class="b-newDiv b-newDiv_stars">Fire Power: ${rebel.stars}</p>
    <div class="b-edit"><button data-function="editBtn" class="b-editbtn">Edit</button></div>`;
    //---------------CREAR Y DEFINIR EL DELETE------------------
    const deletebtn = document.createElement("button");
    deletebtn.className = "b-editbtn";
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", () => {
      removeShip(rebel.id);
    });
    newDiv$$.appendChild(deletebtn);
    //---------------ENLAZAR DIV INTERNO AL DIV CENTRAL------------------
    shipsDiv.appendChild(newDiv$$);
  }
  //----------------CONTADOR DE ELEMENTOS PARA EL TITULO---------------------------

  const shipsCounter = document.createElement("div");
  const shipsCount = ships.length;
  shipsCounter.innerHTML = `Starships (${shipsCount})`;
  shipsnum.appendChild(shipsCounter);

  //------------------------BOTON DE EDITAR--------------------------------
  const editBtn = document.querySelector('[data-function="editBtn"]');
  editBtn.addEventListener("click", () => {});

  //----------------------ESTRELLAS--------------------------
  const pintarEstrellas = () => {
    let estrellas = "";

    for (let i = 0; i > 5; i++) {
      if (estrellaCompleta) {
        estrellas += '<img src="estrella_rellena"></img>';
      } else {
        estrellas += '<img src="estrella_vacia"></img>';
      }
    }

    asdasd.innerHtml = `
  
  <div>.....
  
  ${estrellas}
  
  ...html
  
  `;
  };

  //-------------------LLAMAR AL FETCH PARA BORRAR ELEMENTOS CON EL BOTON-----------------------
  const removeShip = (id) => {
    fetch("http://localhost:3000/ships/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
  };
}
