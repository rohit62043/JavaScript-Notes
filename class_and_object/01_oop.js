//object literals
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

//Concept of constuctor function

let newHero=[1,3]
//JS ka prototipal behaviour i.e->wo kabhi haar  hi manta hai koi cheez khoj rha hai to layer to layer upar tak jyega jab tak usko null nhi mil jyega

// ishi behaviour se this keyword kaam karta hai
//arrow function me this ka access nhi hota hai  q ki ye prototype waha aa jata hai
//class bhi ishi ke through mila hai

function newR(){
  console.log("dasd");
}

newR.power=2;
console.log(newR.name)
console.log(newR.prototype)

newR.prototype.sayHello=function(){
  console.log(`hello ${this.power}`);
}

console.log(newR)
//newR.sayHello()
const newF= new newR();
//console.log(newF.sayHello())

//before using new keyword all this properties and method were hanging in air.Jaise hi new use kiya ek object bana or 
//uske andar prototype inject hua or ye sare property and method useke andar dala and return kiya new Object. 

