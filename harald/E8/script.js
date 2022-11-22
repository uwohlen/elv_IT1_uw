
let container = document.querySelector(".container");   
let button = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

button.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}