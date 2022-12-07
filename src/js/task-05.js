
const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const addSpanText = event => {

    if(inputEl.value === "") {
        spanEl.textContent = "Anonymous";
    } else spanEl.textContent = inputEl.value;
    
}

inputEl.addEventListener("input", addSpanText);