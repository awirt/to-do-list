//Prove JS File is Linked to HTML
console.log("JS is loaded.");

//Variables
var submitBtn = $(".submit");
var clearAllBtn = $(".clear-all");
var appendContainer = $(".append-container");


//Functions
function addItem(event) {
  event.preventDefault();
  var userText = $(".text").val();
  appendContainer.append(`
    <section class="to-do-item">
      <p>${userText}</p>
    </section>
  `);
  $(".text").val("");
}

function clearAll(event) {
  event.preventDefault();
  $(".to-do-item").remove();
}

//Calling Functions & Event Listeners
  //1. when submit button is clicked, append user input text to the container
submitBtn.on("click", addItem);
clearAllBtn.on("click", clearAll);
