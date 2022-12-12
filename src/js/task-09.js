
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const body = document.querySelector("body")

btnEl.addEventListener("click", chengeColorOnBode );

function chengeColorOnBode(event) {
  console.log(event)
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = body.style.backgroundColor;

}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
