const inputEl = document.querySelector("#validation-input");
const dataLengthInput = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", loseFocusOnInput)

function loseFocusOnInput(event) {

    const inpurCurrentValue = event.currentTarget.value.length;
    console.log(inpurCurrentValue)
  
    if(inpurCurrentValue === dataLengthInput) {
        
        return inputEl.classList.replace("invalid","valid")
        
    } else if (inpurCurrentValue !== dataLengthInput) {

        
        return inputEl.classList.add("valid","invalid")
    } 
     
     
}
