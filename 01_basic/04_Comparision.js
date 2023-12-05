//***Tricky when we try to compare between diffrent datatype */
// console.log("2">1) ==>true
// console.log("02">1) ==>true

// console.log(null >0); ==>false
// console.log(null==0); ==>false
// console.log(null>=0);==>true
/*
   The reason is that an equality check == 
   and comparision > < >= <= work diffrently.
   Comparisions convert null to a number, treat it as 0.
   that's why(3) null>=0 is true and (1) null >0 is false.
   and equality convert null to NaN
*/

// console.log(undefined==0); //false
// console.log(undefined<0); //false
// console.log(undefined>0); //false
// console.log(undefined<=0); //false
// console.log(undefined>=0); //false

/**Strict comparision === */
// console.log("2"==2); ==>true
// console.log("2"===2); ==>false