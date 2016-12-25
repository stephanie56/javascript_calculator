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
  var string1 = []; // placeholder for firstNum
  var string2 = []; // placeholder for secNum
  var opObj = {
    firstNum: null, // first number input
    secNum: null, // second number input
    op: null // operation sign input
  };


  $(".key").click(function(){

    if($(this).hasClass("opkey")) {
      // if click on operation keys
      if(string1.length !== 0  && string2.length == 0) {
      // If first input exist and the second input is empty, put this operation value to opObj.op
      opObj.op = $(this).attr("data-key");
      opObj.firstNum = string1.join(""); // when click on op sign, display first num
      displayOp(opObj.op);
      string1 = [];
      errMsg("when string1 exist and string2 is empty, display operation sign. opObj.firstNum is " + opObj.firstNum + " and secNum is " + opObj.secNum );
         }
      else if(opObj.firstNum !== null && string2.length !== 0) {
      // if first and second input exist, clear up str1 & str2 memory, assign the calculation of firstnum and secnum to firstnum => obj.first = eval(obj.first+obj.op+obj.sec), obj.sec = null, obj.op = this.attr, strinfdisplay(obj.first)
        opObj.secNum = string2.join("");
        var cal = opObj.firstNum + opObj.op + opObj.secNum;
        opObj.firstNum = eval(cal);
        opObj.secNum = null;
        string2 = [];
        opObj.op = $(this).attr("data-key");
        displayOp(opObj.firstNum);
        errMsg("Result of first two calculation is " + opObj.firstNum + " and string1 is " + string1 + " and string2 is "+ string2 + "opObj.firstNum is " + opObj.firstNum + " and secNum is " + opObj.secNum );
      }
      else if (opObj.firstNum !== null && string2.length == 0){
        opObj.op = $(this).attr("data-key");
        displayOp(opObj.op);
        errMsg("when firstNum exists and change operation sign, replace new op to " + opObj.op);
      }

      else {
      // if both of first and secondnum are empty, and opObj.firstNum is empty as well do nothing
        errMsg("both strings are empty. string1 is " + string1 + "and string2 is " + string2 );
      }

    }

    else if ($(this).hasClass("numkey")) {
      // if click on number keys
      if(opObj.op == null){
      // If no operation sign there, write datakey value to string 1, and assign the value of string 1 to firstNum
      pushNum($(this).attr("data-key"), string1);
      // string1.push($(this).attr("data-key"));
      displayNum(string1);
      errMsg("if no operation sign here, keep writing on string1. " + "string1 is " + string1 + " and string2 is "+ string2 );
         }
      else {
       // If an operation sign exist, write datakey value to string 2, and assign the value of string 2 to secNum
      pushNum($(this).attr("data-key"), string2);
      // string2.push($(this).attr("data-key"));
      displayNum(string2);
      errMsg("if an operation sign exist, keep writing on string2. string1 is " + string1 + "and string2 is "+ string2 );
      }
    }

    else if ($(this).hasClass("clearkey")) {
    // when click on clearKey
    $(".display").text("0");
    clearData();
    errMsg("i'm clicking on the clear key.");
      }

    else {
     errMsg("i'm clicking on a key that does nothing.");
     }

  console.log(opObj); // testing

  }); // on-click keys event

 /* check the current number string, if num[0] is zero && num[1] is not dot,   */
 function pushNum (val, arr){
   if(val == "." && arr.length == 0){
     return arr.push("0.");
   } // if first digit is dot, add zero before the dot
   else if (val == "0" && arr.length == 0){
     return arr;
   }
   else if (val == "-" && arr[0] !== "-"){
     return arr.unshift("-"); // if cilck -/+ add negative sign at beginning of the number string
   }
   else if (val == "-" && arr[0] == "-"){
     return arr.shift("-"); // if cilck -/+ add negative sign at beginning of the number string
   }
   else{
     return arr.push(val);
   } // push this.attr to string
 }

 /* a function to display digits on screen */
 function displayNum (arr){
   if (arr.length == 0){
     $(".display").text("0");
   }
   else {
     arr = arr.join("");
     $(".display").text(arr);
   }
 }

 /* a function to display operation signs on screen */
 function displayOp (elm){
   $(".display").text(elm);
 }

/* a function to clear out all memories and display */
 function clearData(){
   opObj.firstNum = null;
   opObj.secNum = null;
   opObj.op = null;
   string1 = [];
   string2 = [];
 }

/* display error message */
  function errMsg (msg){
    $(".testing").text(msg);
  }

}); // document.ready ends
