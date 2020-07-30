document.getElementById("container");
document.querySelector("#container");
document.querySelectorAll(".second");
document.querySelector("ol.third");
document.getElementById("container").textContent = "Hello!";

let footer = document.querySelector(".footer");
footer.classList.add("main");

footer.classList.remove("main");

let liElement = document.createElement("li");
liElement.textContent = "four";

let ulElement = document.querySelector("ul");
ulElement.appendChild(liElement);


let list = document.querySelectorAll("ol li");
for(const element of list){
    element.style.backgroundColor = "green";
}

 document.querySelector(".footer").remove();


 
