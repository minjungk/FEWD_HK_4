var totalAmount = 0;

document.getElementById("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e) {
	e.preventDefault(); //prevent default behaviors

	var userInput = parseFloat(document.getElementById("newEntry").value);

	if (isNaN(userInput)) {
		//if not a number prompt to enter a number/also to clear the total field
		if (document.getElementById("newEntry").value == "clear") {
			document.getElementById("total").innerHTML = addDollarSign(0);
			document.getElementById("newEntry").value = "";
		} else {
			console.log("Please enter a numeric value.");
		}
		document.getElementById("newEntry").value = "";
	} else {
		var newAmount = userInput;
		totalAmount = totalAmount + newAmount;
		//console.log(totalAmount);
		document.getElementById("total").innerHTML = addDollarSign(totalAmount);
		document.getElementById("newEntry").value = "";	//clear afterwards
	}	
}

function twoDecimalOnly(num) {
	return num.toFixed(2);//turn the number into string though..
}

function addDollarSign(num) {
	return "$" + twoDecimalOnly(num);
}