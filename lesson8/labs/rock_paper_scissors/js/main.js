
var humanScore = 0;
var computerScore = 0;

// var userChoice = document.getElementsByTagName("button")[].value;
var computerChoice = function(){
	Math.floor(Math.random() * 3);
		if (computerChoice == 3) {
			return "rock";
		} else if (computerChoice == 2) {
			return "paper";
		} else {
			return "scissors";
		}
	};
} 

document.getElementById('rock').onclick = compare('rock', computerChoice);
document.getElementById('paper').onclick = compare('paper', computerChoice);
document.getElementById('scissors').onclick = compare('scissors', computerChoice);

function compare(humanChoice, computerChoice) {
	document.getElementById("status").innterHTML = "<p>You played " + humanChoice +". The bot played " + computerChoice".</p>";
	if (humanChoice == 'rock') {
		if (computerChoice == 'scissors') {
			document.getElementById("status").innterHTML += 'You won!. :)';
			humanScore++;
		} else if (computerChoice == 'paper') {
			document.getElementById("status").innterHTML += 'You lost. :(';
			computerScore++;	
		} else {
			document.getElementById("status").innterHTML += "You tied. :|";
		}
	} else if (humanChoice == 'scissors') {
		if (computerChoice == 'paper') {
			document.getElementById("status").innterHTML += 'You won!. :)';
			humanScore++;
		} else if (computerChoice == 'rock') {
			document.getElementById("status").innterHTML += 'You lost. :(';
			computerScore++;
		} else {
			document.getElementById("status").innterHTML += "You tied. :|";
		}
	} else {
		if (computerChoice == 'rock') {
			document.getElementById('status').innterHTML += 'You won!. :)';
			humanScore++;
		} else if (computerChoice == 'scissors') {
			document.getElementById("status").innterHTML += 'You lost. :(';
			computerScore++;
		} else {
			document.getElementById("status").innterHTML += "You tied. :|";
		}
	}	
	document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('computerScore').innerHTML = computerScore
}
//document.getElementById("status").value = compare;
//document.getElementById("rock").onclick = compare("rock", computerChoice); //computer doesn't recognize the funciton as an event handler...

