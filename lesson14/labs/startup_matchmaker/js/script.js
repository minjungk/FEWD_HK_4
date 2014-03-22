// $(".push-button").click(function(){

// 	if ($(this).hasClass("opened")){
// 	// close the menu
// 	$(".navItem").css("display", "none");
// 	$(this).removeClass("opened");

// 	} else {
// 	// open the menu
// 	$(".navItem").css("display", "block");
// 	$(this).addClass("opened");
// 	}	
// });

// $(".push-button").click(function(){
// 	$(".navItem").toggle("slow");
// });

$(".push-button").click(function(){

	if ($(this).hasClass("opened")){
	// close the menu
	// $(".navItem").css("display", "none");
	$(".navItem").slideUp();
	$(this).removeClass("opened");

	} else {
	// open the menu
	// $(".navItem").css("display", "block");
	$(".navItem").slideDown();
	$(this).addClass("opened");
	}	
});