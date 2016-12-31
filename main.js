/** JS CALCULATOR **/
// A Free Code Camp front-end development project
// Coded by Stephanie Zeng github.com/stephanie56

$(document).ready(function(){
  var string1 = []; // tempt holder for firstNum
  var string2 = []; // tempt holder for secNum
  var opObj = {
    firstNum: null, // first number input
    secNum: null, // second number input
    op: null // operation sign input
  };

  $(".key").click(function(){
    if($(this).hasClass("opkey")) {
      // if click on operation keys
      if(string1.length !== 0  && string2.length == 0) {
      // If first input exists and the second input doesn't, assign current operation value to opObj.op
      opObj.op = $(this).attr("data-key");
      opObj.firstNum = string1.join(""); // when click on a operation sign, assign strfirstNum to OBJ.firstNum
      displayOp(opObj.op); // display operation sign
      string1 = []; // after assigning first number value to OBJ.firstNum, empty first string holder
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
      }
      else if (opObj.firstNum !== null && string2.length == 0){
        opObj.op = $(this).attr("data-key");
        displayOp(opObj.op);
      }
      else {
      // if both of first and secondnum are empty, and opObj.firstNum is empty as well do nothing
        console.log("both strings are empty. string1 is " + string1 + "and string2 is " + string2 );
      }

    }

    else if ($(this).hasClass("numkey")) {
      // if click on number keys
      if(opObj.op == null){
      // If no operation sign there, write datakey value to string 1, and assign the value of string 1 to firstNum
      pushNum($(this).attr("data-key"), string1);
      displayNum(string1);
      }
      else {
       // If an operation sign exist, write datakey value to string 2, and assign the value of string 2 to secNum
      pushNum($(this).attr("data-key"), string2);
      displayNum(string2);
      }
    }

    else if ($(this).hasClass("clearkey")) {
    // when click on clear Key
    $(".display").text("0");
    clearData();
    }

    else {
     console.log("i'm clicking on a key that does nothing.");
    }

    console.log(opObj);

  }); // on-click keys event

 /* a function to decide how to push input value to the string array holder */
 function pushNum (val, arr){
   if(val == "." && arr.length == 0){
     // if first digit is dot, add zero before the dot
     return arr.push("0.");
   }
   else if(val == "." && arr.indexOf(".")!=-1){
     return arr;
   }
   else if ((val == "0" && arr.length == 0) || arr.length > 12){
     // if first digit is 0, or user try to enter more than 12 digits
     return arr;
   }
   else if (val == "-" && arr[0] !== "-"){
     // if cilck -/+ add negative sign at beginning of the number string
     return arr.unshift("-");
   }
   else if (val == "-" && arr[0] == "-"){
     // if cilck -/+ add negative sign at beginning of the number string
     return arr.shift("-");
   }
   else if (val == "CE"){
     // if click on CE btn, remove last entered digit
     return arr.pop();
   }
   else{
     return arr.push(val);
   }
 }

 /* a function to display digits on screen */
 function displayNum (arr){
   if (arr.length == 0){
     $(".display").text("0");
   }
   else if(arr.length > 20){
     arr = arr.join("");
     var num = (parseFloat(arr)).toPrecision(10);
     $(".display").text(num);
   }
   else {
     arr = arr.join("");
     $(".display").text(arr);
   }
 }

 /* a function to display operator signs & firstNum on screen */
 function displayOp (elm){
   elm = elm + ""; // parse number to string
   if(elm.length > 10){
     var num = (parseFloat(elm)).toPrecision(4);
     num = num.replace(/\.?0*$/, ""); // trim useless zeros
     $(".display").text(num);
   }
   else{
     $(".display").text(elm);}
 }

/* a function to clear out all memories and displayed characters on screen */
 function clearData(){
   opObj.firstNum = null;
   opObj.secNum = null;
   opObj.op = null;
   string1 = [];
   string2 = [];
 }

}); // document.ready ends
