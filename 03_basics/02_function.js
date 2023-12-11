function addTwoNumbers(a,b){
    return a+b;
}

console.log(addTwoNumbers(1,3));
console.log(addTwoNumbers(1));
console.log(addTwoNumbers(1,"a"));
console.log(addTwoNumbers(1,null));
console.log(addTwoNumbers(1,undefined));

function userName(name){
    if(name===undefined){
        console.log("Please enter user name")
        return;
    }
    return `${name} just logged in`;
}
console.log(userName("Rohit"));
console.log(userName());

// *******REST OPERATOR**********
function calculator(...num1){
    return num1;
}

console.log(calculator(10,30,40));

function calculator2(val1,val2,...num1){
    return num1;
}

console.log(calculator2(10,30,40,4,54,9));

// ***Passing object as argument
const user={
    name:"Rohit",
    age:21,
}

