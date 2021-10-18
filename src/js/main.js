/* General */

/* Calculator */
const NUMBERS = document.getElementById("numbers");
const BUTTONS = document.getElementById("buttons");
const BUTTON = BUTTONS.childNodes;

/** Mathematical operations **/
function add(array_numbers) {
  var result = 0;
  for (var number of array_numbers) {
    result += Number.parseFloat(number);
  }
  return result;
}
function subtract(array_numbers) {
  var result = 0;
  var size_array_numbers = array_numbers.length;
  for (var i = 1; i < size_array_numbers; i++) {
    result += Number.parseFloat(array_numbers[i]);
    if (i == (size_array_numbers - 1)) {
      result = Number.parseFloat(array_numbers[0]) - result;
    }
  }
  return result;
}
function multiply(array_numbers) {
  var result = 1;
  for (var number of array_numbers) {
    result *= Number.parseFloat(number);
  }
  return result;
}
function divide(number_1, number_2) {
  var result = Number.parseFloat(number_1) / Number.parseFloat(number_2);
  return result;
}

BUTTON.forEach(function(e, i, a) {
  e.addEventListener("click", function() {
    var btn = e.getAttribute("id");
    if (e.innerHTML === "DEL") {
      var new_number = NUMBERS.innerHTML.split("");
      new_number.pop();
      NUMBERS.innerHTML = new_number.join("");
    }
    else if (e.innerHTML === "RESET") {
      NUMBERS.innerHTML = "";
    }
    else if (e.innerHTML === "=") {
      var addition_operator = /(\+)/gi;
      var subtraction_operator = /(-)/gi;
      var multiplication_operator = /(x)/gi;
      var division_operator = /\//gi;
      if (addition_operator.exec(NUMBERS.textContent)) {
        var temp_numbers = NUMBERS.textContent.split("+");
        NUMBERS.innerHTML = add(temp_numbers);
      }
      if (subtraction_operator.exec(NUMBERS.textContent)) {
        var temp_numbers = NUMBERS.textContent.split("-");
        NUMBERS.innerHTML = subtract(temp_numbers);
      }
      if (multiplication_operator.exec(NUMBERS.textContent)) {
        var temp_numbers = NUMBERS.textContent.split("x");
        NUMBERS.innerHTML = multiply(temp_numbers);
      }
      if (division_operator.exec(NUMBERS.textContent)) {
        var temp_numbers = NUMBERS.textContent.split("/");
        NUMBERS.innerHTML = divide(temp_numbers[0],temp_numbers[1]);
      }
    }
    else {
      NUMBERS.innerHTML += e.innerHTML;
    }
  });
});