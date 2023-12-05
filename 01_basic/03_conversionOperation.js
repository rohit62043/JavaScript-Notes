let score="123ab"

//console.log(typeof(score));
let valueInNumber = Number(score);
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);  //NaN
//Be carefull while conversion in number it may give NaN
// It will convert
 //Null to 0
 //undefine to NaN
 //false to 0

 /*
 String to number conversion using Number(--);
 "33"==>33
 "3asd"==>NaN
 false==>0
 true==>1
 */

 // Number()-->to Number Conversion
 /* Boolean()---> to boolean conversion
    ""-->false
    "fgfdg"-->true
    1-->true
    0-->false;
 */


//String()--> to String conversion
//   let someNumber=33

//   let stringNumber=String(someNumber);
//   console.log(stringNumber);
//   console.log(typeof(stringNumber));

//**************OPERATIONS*********/
let str1="Rohit";
let str2=" Singh";
// console.log(str1-str2) ==> NaN
// console.log(str1+str2) ==> Rohit Singh

//***Tricky */
console.log('2'+1); //==>21'
console.log(1+'2'); //==>'12'
console.log('2'+1+3); //==>'213'
console.log(1+3+'2'); //==>'42'

console.log(+true); //==>1
console.log(+"");  //==>0

//**prfix and postfix operator */
//study from mdn


