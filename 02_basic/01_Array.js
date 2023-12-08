// Array

const myArr = [0,1,2,3,4,5]
const myArray2=new Array(1,2,3,4);

const myArray3=myArray2; //Array copy is shallow copy

//Array methods
// myArray3.push(5)
// myArray3.pop()
// console.log(myArray3);
// console.log(myArray2); //effect of shallow copy

// myArr.unshift(9)//push from end
// myArr.shift() //pop from begnning

//console.log(myArr.includes(9)); //check if particular element is present or not
//console.log(myArr.indexOf(2)); //gives index of particular element

const newArr=myArray2.join(); //convert array into string
//console.log(newArr,typeof(newArr));

//Slice and splice-->MAin diffrence is:
// 1. In Slice last element is not include which is included in splice
// 2. In Slice original array is not manipulated while in splice the array is Manipulated

// const myn1 = myArray2.slice(1,3);
// console.log(myn1);
// console.log("A ",myArray2);

// const myn2 = myArray2.splice(1,3);
// console.log(myn2);
// console.log("A ",myArray2);


//*********Concat And Spread operator*******/
const marvel_heros = ["thor","IronMan","SpiderMan"];
const dc_heros = ["SpiderMan","Flash","batman"]

//marvel_heros.push(dc_heros); //Not a nice method array ke andar array aa jyega

const newA1=marvel_heros.concat(dc_heros); //combines two array and return a new array
// console.log(newA1);

const newA2 = [...marvel_heros,...dc_heros];
// console.log(newA2);

// Note: Diffrence between concat and spread operator is that using concat we can combine only 2 array at a time but using spread we can combine as many as u need

//Flattening multi dimension array into 1D array
const another_Array=[1,2,[3,4],[3,6,8,[2,4,6]],8,9];
const real_Array=another_Array.flat(3);
//console.log(real_Array);

// check and conversion in array
console.log(Array.isArray("Rohit Singh"));
console.log(Array.from("Rohit Kumar Singh")); //Return a new array 
console.log(Array.from({ name:"Roihit"}));//-->if unable to convert return empty array

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));


