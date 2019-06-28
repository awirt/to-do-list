//Prove JS File is Linked to HTML
console.log("JS is loaded.");

//Variables
var submitBtn = $(".submit");
var clearAllBtn = $(".clear-all");
var appendContainer = $(".append-container");
var localStorageText = [];

//Functions
function addItem(event) {
  event.preventDefault();
  var userText = $(".text").val();
  var newHTML = `
    <section class="to-do-item">
      <p>${userText}</p>
    </section>
  `
  appendContainer.append(newHTML);
  localStorageText.push(newHTML);
  console.log(localStorageText);
  $(".text").val("");
}

function clearAll(event) {
  event.preventDefault();
  $(".to-do-item").remove();
  alert("All items are cleared!");
}

//Calling Functions & Event Listeners
  //1. when submit button is clicked, append user input text to the container
submitBtn.on("click", addItem);
clearAllBtn.on("click", clearAll);
