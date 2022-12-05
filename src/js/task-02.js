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
  const itemEl = document.querySelector("#ingredients");
  return itemEl.insertAdjacentElement("beforeend", listEl);

});