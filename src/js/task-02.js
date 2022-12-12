const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const addIngredientsToWeb = ingredients.map(Array => {
  let listEl = document.createElement("li");
  listEl.textContent = Array;
  listEl.classList = "item";
  return document.querySelector("#ingredients").insertAdjacentElement("beforeend", listEl);

});