const form$$ = document.querySelector("form");

form$$.addEventListener("submit", (sub) => {
  sub.preventDefault();

  const name = form$$.querySelector(".starshipname").value;
  const class1 = form$$.querySelector(".class1").value;
  const stars = form$$.querySelector(".stars").value;
  const description = form$$.querySelector(".description").value;
  const image = form$$.querySelector(".image").value;

  const newProduct = {
    name: name,
    class1: class1,
    stars: stars,
    description: description,
    image: image,
  };

  addProduct(newProduct);
});

form$$.addEventListener("change", (sub) => {
  sub.preventDefault();

  const name = form$$.querySelector(".starshipname").value;
  const class1 = form$$.querySelector(".class1").value;
  const stars = form$$.querySelector(".stars").value;
  const description = form$$.querySelector(".description").value;
  const image = form$$.querySelector(".image").value;

  const newProduct = {
    name: name,
    class1: class1,
    stars: stars,
    description: description,
    image: image,
  };

  previewProduct(newProduct);
});

function addProduct(newProduct) {
  fetch("http://localhost:3000/ships/", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newProduct),
  });
}
/*    .then((res) => res.json())
    .then((resData) => {
      console.log(resData);
    });
}*/
