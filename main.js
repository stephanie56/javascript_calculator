/** JS CALCULATOR **/
// User Story: I can add, subtract, multiply and divide two numbers.
// User Story: I can clear the input field with a clear button.
// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

$(document).ready(function(){
  var inpArr = [];
  var secinpArr = [];
  var firstNum;
  var secNum;
  var opObj = {
    firstInp: null,
    secInp: null,
    operation: null,
    result:null
  };

function addNum (){
  inpArr.push($(this).attr("data-key"));
  firstNum = inpArr.join("");
  opObj.firstInp = firstNum;
}

$(".key").bind("click", addNum, false);


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
