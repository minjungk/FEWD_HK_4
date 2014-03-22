$(document).ready( function() {
	//Shuffle when page is loaded
	shuffleAllCards();
	// Reset the game
	$('#reset').click(function(){
		shuffleAllCards();
	});
});

function shuffleAllCards(){
	removeAllCards();

	var cards = ['king', 'queen','king', 'queen'];
	shuffle(cards);

	$('.cards').each(function(index){
		$(this).addClass(cards[index]);
		$(this).data('card', cards[index]);
	});
}

function removeAllCards() {
	$('.cards').removeClass('selected');
	$('.cards').removeClass('king');
	$('.cards').removeClass('queen');
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var firstCard;
var secondCard;

//if a card is selected, show the front of the card
$('.cards').click(function() {
	// Is there any existing selected card?
	if ($('.selected').length > 0) {
		// console.log("second");
		$(this).addClass("selected");

		// Get the second card value
		secondCard = $(this).data('card');

		// compare
		if (firstCard == secondCard) {
			console.log("match");
		} else {
			console.log("miss");

		}

	} else {
		$(this).addClass("selected");

		// Get the first card value
		firstCard = $(this).data('card');
	}
});

//on click, add selected class
//if two cards are the same, add matched class and remove selected class
//if two cards are not the same, flip them
//
