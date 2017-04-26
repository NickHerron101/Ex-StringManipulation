//general variables
var textInput = document.getElementById("textInput");
var outPutRev = document.getElementById("outPutRev");
var outPutAlpha = document.getElementById("outPutAlpha");
var outPutPal = document.getElementById("outPutPal");
var testString = "";
var clearButton = document.getElementById("clear");

var submit = document.getElementById("button");

//Event listeners
//
submit.addEventListener("click", function(event){
	testString = textInput.value;
	reversal(textInput.value);
	alphabits(textInput.value);
	palindrome(textInput.value);
});

textInput.addEventListener("keydown", function(event){
	console.log(event);
	var key = event.keyCode;
	if (key === 13) {
		reversal(textInput.value);
		alphabits(textInput.value);
		palindrome(textInput.value);
	}
});

clearButton.addEventListener("click", function(event){
	testString = "";
});


/* Letters Only Function */

function reversal(testString) {
	console.log(testString);
    var newString = testString.split("").reverse("").join("");
    outPutRev.innerHTML = newString;
}

function alphabits(testString) {
	console.log(testString);
    var newString = testString.split("").sort("").join("");
    outPutAlpha.innerHTML = newString;
}

function palindrome(testString) {
	if (textInput.value === testString.split("").reverse("").join("")) {
		outPutPal.innerHTML = "You're string is a palindrome";
	} else {
		outPutPal.innerHTML = "You're string is not a palindrome";
	}

}


