/** JS CALCULATOR **/
// User Story: I can add, subtract, multiply and divide two numbers.
// User Story: I can clear the input field with a clear button.
// User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

/** logic:
Key on click

Var string1 =""; //empty string to store temp digits
Var string2 = "";

- if this = opkey
1. If firstnum = null, break
2. If firstnum != null && secnum = null, obj.opval = this.attr
3. If firstnum && secnum, obj.first = eval(obj.first+obj.op+obj.sec), obj.sec = null, obj.op = this.attr, strinfdisplay(obj.first)

- if this = numkey
1. If obj.op = null, obj.first = writeNum(str1, this.attr),  display(obj.first)
2. If firstnum != null && obj.op != null, obj.sec =  writeNum(str2, this.attr) display(obj.sec)



Key function
WriteNum(str, numstring) => return str += numstring
ClearNum =>

**/

$(document).ready(function(){
  // temp string holders for firstNum and secNum
  var str1 = "";
  var string1 = null; // placeholder for firstNum
  var str2 = "";
  var string2 = null; // placeholder for secNum
  var opObj = {
    firstNum: null, // first number input
    secNum: null, // second number input
    op: null // operation sign input
  };

  $(".key").click(function(){

    if($(this).hasClass("opkey")) {
      // if click on operation keys
      if(string1 !== null && string2 == null) {
      // If first input exist and the second input is empty, put this operation value to opObj.op
      opObj.op = $(this).attr("data-key");
      opObj.firstNum = string1; // when click on op sign, display first num
      display(opObj.op);
         }
      else if(opObj.firstNum !== null && string2 !== null) {
      // if first and second input exist, clear up str1 & str2 memory, assign the calculation of firstnum and secnum to firstnum => obj.first = eval(obj.first+obj.op+obj.sec), obj.sec = null, obj.op = this.attr, strinfdisplay(obj.first)
        opObj.secNum = string2;
        var cal = opObj.firstNum + opObj.op + opObj.secNum;
        opObj.firstNum = eval(cal);
        opObj.secNum = null;
        opObj.op = $(this).attr("data-key");
        display(opObj.firstNum);
      }
      else {
      // if both of first and secondnum are empty, do nothing
        console.log("opkey error");
      }

    }
    else if ($(this).hasClass("numkey")) {
      // if click on number keys
      if(opObj.op == null){
      // If no operation sign there, write datakey value to string 1, and assign the value of string 1 to firstNum
      string1 = writeNum(str1, $(this).attr("data-key"));
      display(string1);
         }
      else {
       // If an operation sign exist, write datakey value to string 2, and assign the value of string 2 to secNum
      string2 = writeNum(str2, $(this).attr("data-key"));
      display(string2);
      }
    }

   else {
    // when click on clearKey
    clearData();
         }

    console.log(opObj); // testing

  }); // on-click keys event

 /* a function to get number from onclick event*/
  function writeNum (str, num){
   return str += num;
 }

 /* a function to display digits on screen*/
 function display (elm){
   $("#resultConsole").text(elm);
 }

/* a function to clear out all memories and display */
 function clearData(){
   $("#resultConsole").text("0");
   opObj.firstNum = null;
   opObj.secNum = null;
   opObj.op = null;
 }



}); // document.ready ends
