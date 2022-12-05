const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const addImagesToList = images
.map(imag =>   `<li class="gallery__item"><img class="gallery__imag" src="${imag.url}" alt="${imag.alt}" width= '500px'></li>`)
.join("");

const  listImag = document.querySelector(".gallery");
listImag.insertAdjacentHTML("beforeend", addImagesToList);

let imegesItem = document.querySelectorAll("img");
console.log(imegesItem)

const a = imegesItem.forEach(value => {
  value.style.height = "300px";
  value.style.display = "block";
  console.log(value)
});

listImag.style.display = "flex";
listImag.style.flexWrap = "wrap";
listImag.style.gap = "10px";







