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
      <button type="button" class="delete-entry">x</button>${userText}
    </section>
  `;
  appendContainer.append(newHTML);
  localStorageText.push(newHTML);
  localStorage.setItem("textArray", JSON.stringify(localStorageText));
  $(".text").val("");
  xButton();
}

function clearAll(event) {
  event.preventDefault();
  $(".to-do-item").remove();
  alert("All items are cleared!");
  localStorage.removeItem("textArray");
}

function refreshRecall() {
  array = JSON.parse(localStorage.getItem("textArray"));
  if (array !== null){
    for (var i = 0; i < array.length; i++){
    appendContainer.append(array[i]);
    }
  };
  xButton();
}

function xButton() {
  var xBtn = $(".delete-entry");
  //Clicking Delete Button Function IFF button exists
  xBtn.on("click", deleteEntry);
  function deleteEntry(event) {
    event.preventDefault();
    event.target.parentNode.remove();
  }
  newArray = deleteElementFromArray(JSON.stringify(event.target.parentNode.innerHTML));
  localStorage.setItem("textArray", JSON.stringify(newArray))
}

function deleteElementFromArray (htmlElement) {
  array = JSON.parse(localStorage.getItem("textArray"));
  if (array !== null){
    for (var i = 0; i <array.length; i++){
      if (array[i] === htmlElement){
      array.splice(i,1);
      i--};
    };
    return array
  };
}

//Calling Functions & Event Listeners
  //1. when submit button is clicked, append user input text to the container
submitBtn.on("click", addItem);
clearAllBtn.on("click", clearAll);
refreshRecall();
