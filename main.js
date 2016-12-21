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
  var str2 = "";
  var opObj = {
    firstNum: null, // first number input
    secNum: null, // second number input
    op: null // operation sign input
  };

  $(".key").click(function(){

    if($(this).hasClass("opkey")) {
      // if click on operation keys
      if(opObj.firstNum !== null && opObj.secNum == null) {
      // If first input exist and the second input is empty, put this operation value to opObj.op
      opObj.op = $(this).attr("data-key");
         }
      else if(opObj.firstNum !== null && opObj.secNum !== null) {
      // if first and second input exist, clear up str1 & str2 memory, assign the calculation of firstnum and secnum to firstnum => obj.first = eval(obj.first+obj.op+obj.sec), obj.sec = null, obj.op = this.attr, strinfdisplay(obj.first)
        var cal = opObj.firstNum + opObj.op + opObj.secNum;
        opObj.firstNum = eval(cal);
        opObj.secNum = null;
        opObj.op = $(this).attr("data-key");
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
      opObj.firstNum = writeNum(str1, $(this).attr("data-key"));
         }
      else {
       // If an operation sign exist, write datakey value to string 2, and assign the value of string 2 to secNum
      opObj.secNum = writeNum(str2, $(this).attr("data-key"));
      }
    }

   else {
    // when click on a wildcard key - e.g. clear key
    console.log("error");
         }

    console.log(opObj); // testing

  }); // on-click keys event

 function writeNum (str, num){
   return str += num;
 }



}); // document.ready ends
