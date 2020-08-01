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


let topEl = document.createElement('h2');
topEl.innerText = textTop.value;
topEl.classList.add('top');

let bottomEl = document.createElement('h2');
bottomEl.innerText = textBottom.value;
bottomEl.classList.add('buttom');

let memeDiv = document.createElement('div');
memeDiv.style.position = 'relative';
memeDiv.style.width = "400px";
memeDiv.style.height = "400px";

memeDiv.appendChild(image);
memeDiv.appendChild(bottomEl);
memeDiv.appendChild(topEl);
divEl.appendChild(memeDiv);

 }

submitButton.addEventListener('click',createImg);

divEl.addEventListener('dblclick',function(e){

    e.target.parentElement.remove();

})