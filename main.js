/** JS CALCULATOR **/
// User Story: I can add, subtract, multiply and divide two numbers.

// User Story: I can clear the input field with a clear button.

// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

$(document).ready(function(){

  var num1, num2;

  $("li[data-key='equal']").click(function(){
    console.log(add(num1, num2));
  });
});

function add (a, b){
  return a + b;
}

function subtract (a, b){
  return a - b;
}

function multiply (a, b){
  return a * b;
}

function divide (a, b){
  return a / b;
}
