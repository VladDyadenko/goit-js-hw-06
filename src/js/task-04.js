let counterValue = 0;
let displeyCounter = document.querySelector("#value");


const buttonClickIncrement =  function() {
   
    counterValue +=1;
    return displeyCounter.textContent = counterValue;
}

const buttonClickDecrtment =  function() {
   
    if(displeyCounter.textContent > 0) {
   counterValue -=1;
   return displeyCounter.textContent = counterValue;}
}

const clickDecrement =  document.querySelector('button[data-action="decrement"]').addEventListener("click", buttonClickDecrtment);
const clickIncrement =  document.querySelector('button[data-action="increment"]').addEventListener("click", buttonClickIncrement);


