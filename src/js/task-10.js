
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

// Отримуємо обрану користувачем кількість елементів для створення:
let newElement = [];

// кількість вибираемо по кліку на стрілки в input:
refs.inputEl.addEventListener("click", (event => 
newElement.splice(newElement.length,0,refs.inputEl.value-1)));

// кількість вибираемо введенням необхіної кількості з клавіатури в input:
refs.inputEl.addEventListener("input", (event => {
  for(let i=0; i<refs.inputEl.value; i +=1 ){
    newElement.push(i)
  } }));
  

// Кликом на кнопку Create запускаємо процесс створення необхідної  
//кількості елементів функцією createBoxes:
refs.createButtonEl.addEventListener("click", () => createBoxes(newElement));

// Створюємо необхідну розмітку з потрібними стилями:
const createBoxes = amount => {

  newElement.map(number => {
  let newDiv = document.createElement("div");
  newDiv.style.background = getRandomHexColor();20
  newDiv.style.height = `${30+ 10*(number-1)}px`;
  newDiv.style.width = `${30+ 10*(number-1)}px`;
  newDiv.style.zIndex= 100-number;
  newDiv.style.position = "absolute";
 
  return refs.divEl.insertAdjacentElement("beforeend", newDiv);
   
})};

//  Очищаємо створену колекцію елементів, поле input 
// та масив кількості елементів по кліку на кнопку Destroy:

refs.destroyButtonEl.addEventListener("click", () => { refs.divEl.innerHTML = ''; newElement.length =0; refs.inputEl.value = ""})

// Можемо працювати з стилями для отримання різних варіантів
refs.divEl.style.position = "relative";
refs.divEl.style.marginTop = "20px"





