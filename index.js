//Prove JS File is Linked to HTML
console.log("JS is loaded.");

//Variables
var submitBtn = $(".submit");
var appendContainer = $(".append-container");


//Functions
function addItem(event) {
  event.preventDefault();
  var userText = $(".text").val();
  appendContainer.append(`
    <p>${userText}</p>
  `);
  $(".text").val("");
}

//Calling Functions & Event Listeners
  //1. when submit button is clicked, append user input text to the container
submitBtn.on("click", addItem);
