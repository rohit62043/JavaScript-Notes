// Can we change the value of PI
console.log(Math.PI); // Output: 3.141592653589793

// Trying to reassign a new value to Math.PI will not work
Math.PI = 3.14; // This won't change the value of Math.PI

console.log(Math.PI); // Output will still be the original value of Math.PI (3.141592653589793)

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//Object.getOwnPropertyDescriptor() is a method in JavaScript that allows you to get the descriptor of an own property of an object. The property descriptor contains information about a property, including its value, writability, enumerable status, and configurability.
//This method takes two parameters:
//Object: The object from which to retrieve the property descriptor.
//Property name (as a string): The name of the property whose descriptor you want to retrieve.


// Get property descriptor for 'name'
//const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
//console.log(descriptor);
//The descriptor variable will contain an object with attributes such as value, writable, enumerable, and configurable, representing the property attributes. For example:

// {
//   value: 'John',     // The value of the property
//   writable: true,    // Indicates if the property can be changed
//   enumerable: true,  // Indicates if the property shows up in for...in loops
//   configurable: true // Indicates if the property can be deleted or its attributes can be changed
// }
//If the property exists on the object and it's a data property, getOwnPropertyDescriptor() returns the descriptor object. However, if the property doesn't exist on the object or it's an inherited property (not an own property), it will return undefined.
//This method is often used when working with property attributes or when you need to inspect the characteristics of specific properties in an object. It's particularly useful for understanding and managing object property behavior in JavaScript

//Example
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}