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
      <div class="unchecked"><input type="checkbox" class="checkbox" name="complete" value="completed">${userText}</div><button type="button" class="delete-entry">x</button>
    </section>
  `;
  appendContainer.append(newHTML);
  localStorageText.push(newHTML);
  localStorage.setItem("textArray", JSON.stringify(localStorageText));
  $(".text").val("");
  xButton();
  completed();
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
    };
    xButton();
    completed();
  };
}

function xButton() {
  var xBtn = $(".delete-entry");
  //Clicking Delete Button Function IFF button exists
  xBtn.on("click", deleteEntry);
  function deleteEntry(event) {
    event.preventDefault();
    var htmlContainer = event.target.parentNode
    htmlContainer.remove();
    newArray = deleteElementFromArray(htmlContainer.outerHTML);
    localStorage.setItem("textArray", JSON.stringify(newArray));
  }
}

function deleteElementFromArray (htmlElement) {
  array = JSON.parse(localStorage.getItem("textArray"));

  for (var i = 0; i <array.length; i++){
    if (array[i].trim() == htmlElement){
    array.splice(i,1);
    i--};
  };
  
  return array;
}

function completed(){
  var checkbox = $(".checkbox");
  checkbox.on("click", strikethrough);
  function strikethrough(event){
    event.preventDefault();
    var html = event.target.parentNode;
    html.toggleClass("checked");
  };
};

//Calling Functions & Event Listeners
  //1. when submit button is clicked, append user input text to the container
submitBtn.on("click", addItem);
clearAllBtn.on("click", clearAll);
refreshRecall();
