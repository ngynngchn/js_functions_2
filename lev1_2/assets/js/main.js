let input = document.querySelector("#color");

function changeColor() {
	document.body.style.backgroundColor = input.value;
	console.log(input.value);
}
