
const refs = {
  inputEl: document.querySelector("input[type='number']"),
  createButtonEl:document.querySelector("button[data-create]"),
  destroyButtonEl:document.querySelector("button[data-destroy]"),
  divEl: document.querySelector("#boxes"),
}
// Функція рандомно створює колір:
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Кликом на кнопку Create запускаємо процесс створення необхідної  
//кількості елементів функцією createBoxes:
refs.createButtonEl.addEventListener("click", () => createBoxes());

// Створюємо необхідну розмітку з потрібними стилями:
const createBoxes = () => {

  console.log(Number(refs.inputEl.value))

  for(let i=0; i < Number(refs.inputEl.value); i +=1) {
  let newDiv = document.createElement("div");
  newDiv.style.background = getRandomHexColor();
  newDiv.style.height = `${30+ 10*i}px`;
  newDiv.style.width = `${30+ 10*i}px`;
  newDiv.style.zIndex= 100-i;
  newDiv.style.position = "absolute";
 
  refs.divEl.insertAdjacentElement("beforeend", newDiv);}
};

//  Очищаємо створену колекцію елементів, поле input 
// та масив кількості елементів по кліку на кнопку Destroy:

refs.destroyButtonEl.addEventListener("click", () => { refs.divEl.innerHTML = '';  refs.inputEl.value = ""})

// Можемо працювати з стилями для отримання різних варіантів
refs.divEl.style.position = "relative";
refs.divEl.style.marginTop = "20px"





