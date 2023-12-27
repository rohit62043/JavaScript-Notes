class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);

//how to define getter in setter before class was introduced(properties ke through getter and setter define karna)
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email)
// but here _email and _password are not private
// we can make them private with the help of clouser property
// In JavaScript, true private properties can be achieved using closures
/*
function User(email, password) {
    let _email = email; // Private property
    let _password = password; // Private property

    // Public methods to access private properties
    this.getEmail = function() {
        return _email.toUpperCase();
    };

    this.setEmail = function(newEmail) {
        _email = newEmail;
    };

    this.getPassword = function() {
        return _password.toUpperCase();
    };

    this.setPassword = function(newPassword) {
        _password = newPassword;
    };
}

const chai = new User("chai@chai.com", "chai");

console.log(chai._email); // undefined - Cannot directly access _email
console.log(chai.getEmail()); // Accessing private property through public method
console.log(chai.getPassword()); // Accessing private property through public method

chai.setEmail("newemail@domain.com");
console.log(chai.getEmail()); // Updated email using the public method
*/

// The _email and _password variables are defined within the User constructor using let, making them accessible only within the scope of that constructor.
// Public methods (getEmail, setEmail, getPassword, setPassword) are defined within the constructor as well. These methods provide controlled access to the 
// private properties, allowing users of the User class to interact with the private properties indirectly through these methods.
// By using closures, these methods retain access to the variables _email and _password even after the User constructor finishes execution, allowing the properties to maintain privacy and encapsulation.

// Keep in mind that while this approach simulates privacy in JavaScript through closures, it's important to note that there's no direct native support
//  for true privacy (as in some other programming languages) in JavaScript. This pattern of encapsulation using closures is a common practice to achieve privacy by convention and is widely used in JavaScript development.

// Note
// function User(email, password){
//     let _email = email;
//     let _password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

// const chai = new User("chai@chai.com", "chai")

// console.log(chai.email);

// In the provided code, you've attempted to create getter and setter methods for the email and password properties using Object.defineProperty(). However, there's an issue with the way you're trying to access the private variables _email and _password within the getter and setter functions.

// The issue lies in the fact that within the getter and setter functions defined using Object.defineProperty(), this._email and this._password won't work as expected. The this context inside these functions does not refer to the private variables _email and _password because they're not directly attached to this.