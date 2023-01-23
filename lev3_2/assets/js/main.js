let fontSize = document.querySelector("#font-size");
let fontFamily = document.querySelector("#font-family");
let sampleText = document.querySelector("#sample-text");
let sampleResult = document.querySelector("#sample-result");

function changeFontsSize() {
	sampleResult.innerHTML = sampleText.value;
	sampleResult.style.fontFamily = fontFamily.value;
	sampleResult.style.fontSize = fontSize.value + "px";
}
