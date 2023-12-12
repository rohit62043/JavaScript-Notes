var c=10;
// var c=2; //We can declare multiple var of same name but we cant do it in let and const
let a=60;
//let a=30; //Let and Const are block variable so cant be redecleared
const b=40;
if(true){
    let a=10;//Do not overwrite the above a value
    const b=20;//Do not overwrite the above b value
    var c=30; //over write the above c value
    //in place of var c=10,we can also write c=10 by default it will be var
    console.log("Inner 'a'-> ",a);
    console.log("Inner 'b'-> ",b);
    console.log("Inner 'c'-> ",c);
}
console.log("********//*********");
console.log("Outer 'a'-> ",a);// cant be accessed outside
console.log("Outer 'b'-> ",b); //cant be accessed outside
console.log("Outer 'c'-> ",c); //can be accessed outside

// Note: Global scope is diffrent in browser and in Node enviroment

function One(){
    const userName="Rohit"

    function two(){
        const website="YouTube";
        console.log(userName);
    }
    //two();
    return two;
}
// Andar wala bahar ka access kar sakta hai lekin bahar wala andar ka nhi
const three=One();
//colosure
three();

// ***Hoisting***

console.log(addone(5)); //Due to hoisting deleration se phle hi access kar sakte hai
function addone(num){
    return num+1;
}

//But hosting doesnot work for function expression ans arrow function it work for only simple function decleration

//console.log(add2(5)); //We cant access it beforehand
const addTwo= function add2(nums){
    return nums+2;
}

//console.log(addThree(7));
const addThree=(num)=>(num+3);
//console.log(addThree(7));