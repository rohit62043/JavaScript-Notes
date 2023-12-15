const email="singhrohit51967@gmail.com"

// if(email){
//     console.log("Email verfied sucessfully");
// }
// else{
//     console.log("Please Enter Valid email");
// }

//falsy value("Evaluate to valse")-->false,0,-0,BigInt 0n,"",null,undefine,NaN
// Other than this all are truthy
//few eg of truthy-->"0","false"," ",[],{},function(){} 

if(email.length===0){
    console.log("Email verfied sucessfully");
}
else{
    console.log("Please Enter Valid email");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// false==0-->True
// false=='-->True
// 0==''-->True

// Nullish Coalescing Operator (??) : null,undefined
let val1=5??10;
console.log(val1);
let val2=null??10;
console.log(val2);
let val3=undefined??10;
console.log(val3);

// Terniary Operator
//Condition?True:False
const icePrice=100;
icePrice<=80?console.log("Less Than 80"):console.log("Greater Than 80");
