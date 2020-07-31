let urlInput = document.getElementById("url");
let textTop = document.getElementById("textTop");
let textBottom = document.getElementById('textBottom');
let divEl = document.querySelector('div');
let submitButton = document.getElementById('submit');

let formEl = document.querySelector('form');


function createImg(){
let image = document.createElement('img');
let source = urlInput.value;
image.src =source;
image.style.position = 'relative';
image.style.width = "400px";
image.style.height = "400px";


let topEl = document.createElement('div');
topEl.innerText = textTop.value;
topEl.classList.add('top');

let bottomEl = document.createElement('div');
bottomEl.innerText = textBottom.value;
bottomEl.classList.add('buttom');

divEl.appendChild(image);
divEl.appendChild(bottomEl);
divEl.appendChild(topEl);

 }

submitButton.addEventListener('click',createImg);

divEl.addEventListener('dblclick',function(e){

    divEl.removeChild(e.target);

})