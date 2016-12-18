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
    operation: null
  };
  $(".key").click(function(){
    if($(this).hasClass("numkey")){
      inpArr.push($(this).attr("data-key"));
      firstNum = inpArr.join("");
      opObj.firstInp = firstNum;
    }
    else {
      opObj.operation = $(this).attr("data-key");
      // if first arg is not empty, input second arg
      if(opObj.firstInp !== null){
        $(".key").click(function(){
          secinpArr.push($(this).attr("data-key"));
          secNum = secinpArr.join("");
          opObj.secInp = secNum;
        });
      }
    }
    console.log(opObj);
  });

  //console.log(opObj);

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
