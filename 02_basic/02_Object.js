//const tinderUser = new Object();

const tinderUser ={};

tinderUser.id1="1223"; //We can use dot operation only when key is not string
tinderUser["id2"]="dsfs";

//if we want to take a string as a key we cant use dot operator to access it or modify it
// tinderUser."age"=19 //this will give error
tinderUser["age"]=19;
//console.log(tinderUser);

const regularUser = {
    email:"sdf123@gmail.com",
    fullname: {
        firstName:"Rohit",
        middleName:"Kumar",
        lastName:"singh",
    }
}

//console.log(regularUser["fullname"]["firstName"]);
//console.log(regularUser.fullname.middleName) // we can use "?" if any vale in nesting doesnt exist

const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}

const obj3 = {...obj1,...obj2}; //if we have same key then value will be overwritten as there cant exist same key
console.log(obj3);
//OR
const obj4=Object.assign(obj1,obj2); // obj1 me spread obj1 and obj2 and assign it to obj3
//console.log(obj4==obj1);
//const obj4=Object.assign({},obj1,obj2); // {} me spread obj1 and obj2 and assign it to obj3
console.log(obj4);

console.log(Object.keys(tinderUser)); //return array which contain all keys
console.log(Object.values(tinderUser)); //return array which contain all values
console.log(Object.entries(tinderUser)); //return array which contain array of each key values

//array of object--->we will use frequently
const arrObj=[
    {
       name:"mohan",
       age:19
    },
    {
       name:"Sohan",
       age:19
    },
    {
       name:"Rohan",
       age:19
    }
]

console.log(tinderUser.hasOwnProperty('age')); //to check whether a key is present or not in an object

//***Destructuring***/

const {id1 : id,id2,age}=tinderUser;

console.log(id,id2,age);

//Api-->JSON
// {
//     "name":"Rohit",
//     "age":20,

// }

// OR

[
    {

    },
    {
        
    }
]

