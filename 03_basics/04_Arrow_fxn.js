//Arrow Function

const one=(num)=>{
    num=num+2;
    return num;
}

//if we only return value then we can make more shorter
const two=(num)=>num+3;
const three=(num)=>(num+3)
// two and three are same theu both return num+3

//Note: agar hum arrow function me { } lagaye to hume return likhna hoga agar retun karna hai to


/*****************THIS KEYWORD***********/
// In JavaScript, the this keyword refers to the object that is currently 
// executing the current function or code. Its value is determined by how 
// a function is called, and it can change based on the context in which it is used.

//The value of this can be affected by:

// 1.Global context: When used in the global scope (outside of any function), this 
// refers to the global object, which in a web browser environment is usually the window object.
//console.log(this === window); // true in a browser environment
console.log(this); //empty object in Node enviroment

// 2.Function context: Inside a function, the value of this depends on how the function is called.

    //  2.1.In a regular function, this typically refers to the object that calls the function.
    function sayHello() {
        console.log(this);
    }
      
    sayHello(); // 'this' refers to the global object (window in a browser)
    
   // 2.2.When using strict mode ('use strict';), if a function is called without any context, this will be undefined.
//    'use strict';
//     function sayHelloStrict() {
//        console.log(this);
//     }

//     sayHelloStrict(); // 'this' is undefined in strict mode
    
    // 2.3.When a function is called as a method of an object, this refers to the object itself.
    const myObj = {
        name: 'John',
        greet: function() {
          console.log(`Hello, my name is ${this.name}`);
        }
      };
      
      myObj.greet(); // 'this' refers to myObj
    
      //2.3.Using call(), apply(), or bind() methods allows you to explicitly set the value of this for a function.
      function sayName() {
        console.log(this.name);
      }
      
      const person = {
        name: 'Alice'
      };
      
      sayName.call(person); // 'this' refers to the 'person' object
      
    //   2.5.Constructor context: Inside a constructor function (a function invoked with new), this refers to the newly created instance of the object.
      function Person(name) {
        this.name = name;
      }
      
      const john = new Person('John');
      console.log(john.name); // 'this' refers to the newly created 'john' object
      
// ****This and arrow function*****'
// In JavaScript, arrow functions (=>) behave differently with regard to the this keyword
//  compared to regular functions. Arrow functions do not have their own this context. Instead, they lexically capture the this value from their surrounding (or enclosing) scope at the time of their creation.

// Here's how arrow functions handle the this keyword:
// 1.Global context: Within an arrow function defined in the global scope, this retains the value of the enclosing scope's this.
const globalFunction = () => {
    console.log(this);
  };
  
  globalFunction(); // 'this' retains the value of the global context (window in a browser)
  
// 2.Function context: When an arrow function is used within a regular function, it captures the this value of its surrounding function.
function regularFunction() {
    const arrowFunction = () => {
      console.log(this);
    };
    
    arrowFunction();
  }
  
  regularFunction.call({ name: 'Alice' }); // 'this' inside the arrow function refers to the context of regularFunction
  
//3.Object context: Arrow functions are not suitable for methods inside objects when you need to access this that refers to the object itself.
//They will instead retain the this value of the enclosing context where they were defined.
const myObj2 = {
    name: 'Bob',
    regularMethod: function() {
      console.log(this);
    },
    arrowMethod: () => {
      console.log(this);
    }
  };
  
  myObj2.regularMethod(); // 'this' refers to myObj
  myObj2.arrowMethod(); // 'this' retains the value from the surrounding scope (possibly the global object)
  

//   Note:It's important to note that due to the lexical scoping behavior of arrow functions, they are commonly
//    used in scenarios where you want to preserve the context of this from the surrounding code or to avoid the 
//    confusion caused by the dynamic behavior of this in regular functions. However, their behavior may not always
//     align with the expected context, especially when used for object methods or in situations where dynamic 
//     binding of this is necessary.






