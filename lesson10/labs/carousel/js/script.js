// DISPLAY Displayed an image
  //* An array of images

  var images = [
    "images/food1.jpg",
    "images/food2.jpg",
    "images/food3.jpg",
    "images/food4.jpg",
    "images/food5.jpg"
  ]

  var userScore = [];

  var currentPosition = 0; 

  // * Display the image corresponding to the number in the sequence the user is at
  function displayImages(position){
    $(".imageHolder img").attr("src", images[position]);
    currentPosition = position; 
  }

// LOGIC End the rating series
  // Once the user reaches the last image in the array, end the series (disable the skip button, show the score()
  // DISPLAY Show the deliciousness score
  // *  Add the scores, divide by total number of images
  // * display score 

// NAVIGATION Return to a previously visited image
  // * Display the Previous image ()

// NAVIGATION Skipping the current image
  // * Display the Next image ()

// RATING Ability to rate the image
  // * Store the user score in an array with the same index as the image in the images array
  // NAVIGATION Display the subsequent image on rating
  // * Display Next Image ()

// RATING Rerate the images
  // * Call the rating function  ()

function addScore() {
  userScore[currentPosition] = $(".score").val();
}

$(".score").change(function() {
  addScore();
  displayImages(currentPosition+1);
});


 displayImages(0);
// $("#backBtn").click( function() {
//   if(images[currentPosition] != 0) {
//     displayImages(currentPosition-1);
//   }
// });