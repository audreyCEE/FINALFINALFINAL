function submitForms() {

  //Define variables that get all food, music, gifs, and pets options
  var foodcheckboxes = document.getElementsByName("food");
  var musiccheckboxes = document.getElementsByName("music");
  var gifscheckboxes = document.getElementsByName("gifs");
  var petscheckboxes = document.getElementsByName("pets");

  //Create arrays for each category, which will be used to store checked values for that category
  var food_array = [];
  var music_array = [];
  var gifs_array = [];
  var pets_array = [];

  //Loop through all checkedboxes for this category and push all checked values into their respective arrays
  for (var i=0; i<foodcheckboxes.length; i++) {
     if (foodcheckboxes[i].checked) {
        food_array.push(foodcheckboxes[i].value);
     }
  }

  for (var i=0; i<musiccheckboxes.length; i++) {
     if (musiccheckboxes[i].checked) {
        music_array.push(musiccheckboxes[i].value);
     }
  }

  for (var i=0; i<gifscheckboxes.length; i++) {
     if (gifscheckboxes[i].checked) {
        gifs_array.push(gifscheckboxes[i].value);
     }
  }

  for (var i=0; i<petscheckboxes.length; i++) {
     if (petscheckboxes[i].checked) {
        pets_array.push(petscheckboxes[i].value);
     }
  }

  //if even one array is empty, display alert message to user and stop the form from submitting
  if (food_array.length === 0 || music_array.length === 0 || gifs_array.length === 0 || 
  	pets_array.length === 0) {
  	alert("Please select at least one option from each category!");
  	return false;
  }

  //else, continue submitting the form
  return true;
}

