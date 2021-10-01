/* General */

/* Calculator */
const NUMBERS = document.getElementById("numbers");
const BUTTONS = document.getElementById("buttons");
const BUTTON = BUTTONS.childNodes;

/** Mathematical operations **/
function add(number_1, number_2) {
  return (number_1 + number_2);
}
function subtract(number_1, number_2) {
  return (number_1 - number_2);
}
function multiply(number_1, number_2) {
  return (number_1 * number_2);
}
function divide(number_1, number_2) {
  return (number_1, number_2);
}

BUTTON.forEach(function(e, i, a) {
  e.addEventListener("click", function() {
    var btn = e.getAttribute("id");
    var re = /(\.{})/gi;
    if (btn === "number" || btn === "point") {
      NUMBERS.innerHTML += e.innerHTML;
    }
    if (btn === "operation") {
      if (e.innerHTML === "DEL") {
        var new_number = NUMBERS.innerHTML.split("");
        new_number.pop();
        NUMBERS.innerHTML = new_number.join("");
      }
      if (e.innerHTML === "RESET") {
        NUMBERS.innerHTML = "";
      }
      if (e.innerHTML === "=") {
        NUMBERS.innerHTML = "Result";
      }
    }
  });
});