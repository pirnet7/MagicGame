var allTableValues = [];
var resultOfTables = [];

function checkCheckboxValue(checkboxId) {
  var checkbox = document.getElementById(checkboxId);
  var value = checkbox.value;
  console.log("Checkbox mit ID " + checkboxId + " hat den Wert: " + value);
  allTableValues.push(parseInt(value));
}
function getSumOfValue(){
  let result = allTableValues.reduce((a, b) => {
    return a + b;
  });
  resultOfTables.push(result);
}

function showResult(){
  alert("Your number is " + resultOfTables);
  reloadPage();
}

function reloadPage(){
  location.reload();
}