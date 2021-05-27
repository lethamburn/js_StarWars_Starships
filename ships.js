//json-server --watch db.json
const shipsUrl = "http://localhost:3000/ships";
const shipsnum = document.querySelector('[data-function="ships-num"]');

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
   
    newDiv$$.classList.add("b-newDiv", "col-md-3"); //CAMBIAR CLASES SEGUN BOTONES Y REMOVE AL ANTERIOR
    //---------------------ELEMENTOS DEL DIV-----------------------------
    newDiv$$.innerHTML = `<img class="b-newDiv__img" src=${rebel.image}>
    <h3 class="b-newDiv b-newDiv__name">${rebel.name}</h3><hr>
    <h2 class="b-newDiv b-newDiv_class">${rebel.class1}</h2>
    <p class="b-newDiv b-newDiv_description">${rebel.description}</p>
    <p class="b-newDiv b-newDiv_stars">Fire Power: ${rebel.stars}</p>
    <div class="b-edit"><button class="b-editbtn">Edit</button></div>`;
    //---------------CREAR Y DEFINIR EL DELETE------------------
    /*const deletebtn = document.createElement("button");
    deletebtn.className = "b-editbtn";
    deletebtn.textContent = "Delete";
    deletebtn.addEventListener("click", ()=>{
      removeShip(newDiv$$);
    });
    newDiv$$.appendChild(deletebtn);*/
     //---------------ENLAZAR DIV INTERNO AL DIV CENTRAL------------------
    shipsDiv.appendChild(newDiv$$);
  }
  //----------------CONTADOR DE ELEMENTOS PARA EL TITULO---------------------------
 
  const shipsCounter = document.createElement("div");
  const shipsCount = ships.length;
  shipsCounter.innerHTML = `Starships (${shipsCount})`;
  shipsnum.appendChild(shipsCounter);
  //const removeShip = (newDiv$$)=>{
    //newDiv$$.remove();
}
