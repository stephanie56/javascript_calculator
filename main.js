/** JS CALCULATOR **/
// User Story: I can add, subtract, multiply and divide two numbers.

// User Story: I can clear the input field with a clear button.

// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

$(document).ready(function(){

  var arg1, arg2, arg3;

  $(".key").click(function(){
    arg1 = $(this).attr("data-key");
    console.log(arg1);
  });

  $(".key").click(function(){
    arg2 = $(this).attr("data-key");
    console.log(arg2);
  });

  $("li[data-key='equal']").click(function(){
    console.log(add(arg1, arg2));
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
