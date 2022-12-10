const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");


inputEl.addEventListener("input", differentFontSizeSpanOnInputEvent);

function differentFontSizeSpanOnInputEvent (event)  {
    
    let inputCurrentTargetVelue = event.currentTarget.value;
   
    spanEl.style.fontSize = `${inputCurrentTargetVelue}px`;
}