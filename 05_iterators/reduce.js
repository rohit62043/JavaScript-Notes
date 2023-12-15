//Mostly used in shoping cart to find the sum of all products

const myNums=[11,2,31,3,2];
let InitialValue=0;
// const myTotal = myNums.reduce((Accumulator,CurrentValue)=>{
//      return Accumulator+CurrentValue;
// },InitialValue);
const myTotal = myNums.reduce((Accumulator,CurrentValue)=>{
    console.log(`Accumulator : ${Accumulator} and CurrentValue : ${CurrentValue}`);
    return Accumulator+CurrentValue;
},InitialValue);

console.log(myTotal);

//Example
const shoppingCart = [
    {
        course:"Js",
        price:599
    },
    {
        course:"C++",
        price:499
    },
    {
        course:"Java",
        price:299
    }
]

const initialValue=0;
const totalSum=shoppingCart.reduce((acc,currVal)=>{
    return acc+currVal.price;
},initialValue);

console.log(totalSum);