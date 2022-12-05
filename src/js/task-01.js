
"use strict"


const listLiItem= document.querySelectorAll('li.item').length;
   console.log(`Number of categories: ${listLiItem}`);


const itemChildEl1 = document.querySelectorAll("ul li ul");
const elementValue = itemChildEl1.forEach(value => 
 console.log(` Category: ${value.previousElementSibling.textContent} 
 Elements: ${(value.children.length)} `))



