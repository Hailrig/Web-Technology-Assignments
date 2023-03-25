let displayContent = "0"; //bootstrap button selecting
let decimal = false;
let opperand = null;
let opperator = null;


window.onload=function(){
	document.getElementById("screen").value = displayContent;
	let butts = document.getElementsByClassName("btn btn-light");
	for (let i = 0; i < butts.length; i++){
		butts[i].addEventListener("click", function(){processInput(this);}, false);
	}
}

document.addEventListener("keyup", function(event){
	butts = document.getElementsByClassName("btn btn-light");
	for (i = 0; i < butts.length; i++){
		butts[i].classList.remove("numpadHighlight");
	}
	if(document.getElementById(event.key) != null){
		document.getElementById(event.key).click();
		document.getElementById(event.key).classList.add("numpadHighlight");
	}
});

function processInput(button){
	butts = document.getElementsByClassName("btn btn-light");
	for (i = 0; i < butts.length; i++){
		butts[i].classList.remove("numpadHighlight");
	}

	let val = button.value;
	if (button.value == "+" || button.value == "-" || button.value == "*" || button.value == "/" || button.value == "=" || button.value == "C"){
		basicOperation(button);
	}
	else if (button.value == "cos" || button.value == "tan" || button.value == "sin" || button.value == "sqrt" || button.value == "exp" || button.value == "rnd" || button.value == "log"){
		advancedOperation(button);
	}
	else {
		operandChange(button);
	}

}

function operandChange(button){
	if (button.value == "."){
		if (decimal == false){
			decimal = true;
			displayContent = displayContent + button.value;
		}
	}
	else if (button.value == "+/-"){
		if (displayContent.substring(0, 1) == "-"){
			displayContent = displayContent.substring(1);
		} else {
			displayContent = "-" + displayContent;
		}
	}
	else if (displayContent == "0"){
		displayContent = button.value;
	}
	else if (displayContent != "0"){
		displayContent = displayContent + button.value;
	}
	document.getElementById("screen").value = displayContent;
}

function basicOperation(button){
	if (button.value == "C"){
		displayContent = "0";
		decimal = false;
	}
	else if (opperand == null){
		if (button.value != "="){
			opperator = button.value;
			opperand = displayContent;
			displayContent = "0";
			decimal = false;
		}
	}
	else if (opperand != null){
		if (button.value == "="){
			displayContent = calculate();
			opperand = null;
			opperator = null;
		}
		else{
			opperand = calculate();
			displayContent = "0";
			decimal = false;
			opperator = button.value;
		}
	}
	document.getElementById("screen").value = displayContent;
}

function advancedOperation(button){
	if (button.value == "cos"){
		displayContent = Math.cos(displayContent);
	}
	if (button.value == "sin"){
		displayContent = Math.sin(displayContent);
	}
	if (button.value == "tan"){
		displayContent = Math.tan(displayContent);
	}
	if (button.value == "sqrt"){
		displayContent = Math.sqrt(displayContent);
	}
	if (button.value == "exp"){
		displayContent = Math.exp(displayContent);
	}
	if (button.value == "rnd"){
		displayContent = Math.round(displayContent);
	}
	if (button.value == "log"){
		displayContent = Math.log(displayContent);
	}
	document.getElementById("screen").value = displayContent;
}

function calculate(){
	if (opperator == "+"){
		return Number(opperand) + Number(displayContent)
	}
	if (opperator == "-"){
		return opperand - displayContent
	}
	if (opperator == "*"){
		return opperand * displayContent
	}
	if (opperator == "/"){
		return opperand / displayContent
	}
}