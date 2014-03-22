//error thrown example
$("body").append("<h1>Hi world!</h1>");

//console.log example, log each of the pies and the index before the switch 
var pies=["Cherry","Pumpkin","Banana","Lemon","Rhubarb"];
$("body").append("There are "+pies.length+" total pies.<br>");

pies.forEach(function(element,index){
	console.log(element);
	switch(element){
		case "Cherry": $("body").append(index+1+") "+element+": Yum!<br>");
		break;
		case "Rhubarb": $("body").append(index+1+") "+element+": Yuck<br>");
		break;
		case "Lemon": $("body").append(index+1+") "+element+": Good<br>");
		break;
		case "Banana": $("body").append(index+1+") "+element+": meh<br>");
		break;
		case "Pumpkin": $("body").append(index+1+") "+element+": meh<br>");
		break;
	}
});

//breakpoint example, put inside the function
function doSomething(){
	var myThing = "Hello world	"
	$("body").append("<p>Paragraph</p>");
	// console.log(myThing)
}
doSomething();