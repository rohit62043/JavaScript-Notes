"use strict"; //treate all JS code as newer version

//alert(3+3); we are using node.js not browser

// number => 2 to power 53
//bigint
//string => ""
//boolean
//null => standalone value
let state=null //Khali hai not 0
//undefine
let fxnState; //the value is undefine i.e. we have not define
let fxn=undefined; //we can also assign undefine

//symbol=> mostly used in react to make components unique
//object

console.log(typeof "rohit");
console.log(typeof undefined); //undefine
console.log(typeof null); //object

//**How data are store and access from memory it is divided into 2 types---> primitive  and non-primitive */
//Primitive--> Call by value
//7 type: String, Number ,Boolean,null,undefine,symbol,BigInt
//Non-primitive(Refrence type)-->Array,Object,function
//JavaScript is Dynamically typed langauge
// which means that data types of variables are determined by the value
// they hold at runtime and can change throughout the program as we assign different values to them.

//symbol-->provide uniquness-->Returns a new unique Symbol value.
let id1=Symbol(123);
let id2=Symbol(123);
console.table([id1,id2]);
console.log(id1===id2); // both are diffrent

//BigInt
let bigNumber=1234n;
console.log(bigNumber);
console.log(typeof(bigNumber));

//Array,objecct,function
const hero=["rohit",1,"453"]; //Array
let obj={
    name:"rohit",
    age:21
}

const myFunction=function () {
    console.log("Hello World");
}

console.table([typeof(hero),typeof(obj),typeof(myFunction)]);
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  'object'  │
// │    1    │  'object'  │
// │    2    │ 'function' │-->object function
// └─────────┴────────────┘