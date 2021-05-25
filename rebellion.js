//json-server --watch db.json
const rebellionUrl = "http://localhost:3000/rebellion";

fetch(rebellionUrl)
  .then((res) => res.json())
  .then((rebellion) => {
    console.log(rebellion);
    printrebellion(rebellion);
  });

//const selectDiv$$ = document.querySelector('[data-function="rebellion"]');

rebellionDiv = document.querySelector('[data-function="rebellion"]');

function printrebellion(rebellion) {
  for (const rebel of rebellion) {
    const newDiv$$ = document.createElement("div");
    newDiv$$.classList.add("b-newDiv", "col-md-3");
    newDiv$$.innerHTML = 

    `<img class="b-newDiv__img" src=${rebel.image}>
    <h3 class="b-newDiv b-newDiv__name">${rebel.name}</h3>
    <h2 class="b-newDiv b-newDiv_class">${rebel.class}</h2>
    <p class="b-newDiv b-newDiv_description">${rebel.description}</p>`;

    rebellionDiv.appendChild(newDiv$$);
  }
}
