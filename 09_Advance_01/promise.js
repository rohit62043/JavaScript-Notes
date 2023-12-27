// asynchronous programming karne ke 2 tarika hai--> acync await or then and catch
//Promise ko hum both async/await and then/catch se bhi handle kar sakte hai
//Jyadatar hum promise consuume hi karta hai(like jab fetch call karte hai etc)
//kabhi kabhi bnyenge bhi
//Promise is an object representing the eventual completion or failure of an asynchronous operation
//Promise has three state-->pending,fulfill,reject

//History of promise--> Q and bluebird-->library

//CREATION PF PROMISE
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB call,cryptography,network call
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
}).catch((e)=>{
    console.log(`Error : ${e}`);
}).finally(()=>{
    console.log("This will run everytime");
})

//one line
// new Promise(function(resolve,reject){
//     //Do an async task
//     //DB call,cryptography,network call
//     setTimeout(function(){
//         console.log('Async task2 is complete');
//         //jo bhi data mile hum aise bhej sakte hai 
//         resolve({username:"Rohit",email:"123@gmail.com"});
//     },1000)
// }).then(function(user){
//     //we can directly access username here but better way is to use another then
//     console.log(`Promise is consumed and username is ${user.username} and email is ${user.email}`);
// }).catch((e)=>{
//     console.log(`Error : ${e}`);
// }).finally(()=>{
//     console.log("This will run everytime");
// })
new Promise(function(resolve,reject){
    //Do an async task
    //DB call,cryptography,network call
    setTimeout(function(){
        console.log('Async task2 is complete');
        //jo bhi data mile hum aise bhej sakte hai 
        resolve({username:"Rohit",email:"123@gmail.com"});
    },1000)
}).then(function(user){
    //we can directly access username here but better way is to use another then
    //console.log(`Promise is consumed and username is ${user.username} and email is ${user.email}`);
    return user.username;
}).then(function(username){
    console.log(`the username is ${username}`);
}).catch((e)=>{
    console.log(`Error : ${e}`);
}).finally(()=>{
    console.log("This will run everytime");
})

//Handling promise with async/await
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"JavaScript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// using then/catch
// promiseTwo.then((user)=>{
//     return user.username;
// }).then((username)=>{
//     console.log(`Username is : ${username}`);
// }).catch((e)=>{
//     console.log(e);
// })

//using aync/await

// problem here is cath is not handle gracefully

// async function consumePromiseTwo(){
//     const response = await promiseTwo
//     console.log(response);
// }

//We can use try and catch to handle errror gracefully
async function consumePromiseTwo(){
    try {
        const response = await promiseTwo
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseTwo()

//handle previous xmlhttprequest using async and await-->we can do by then/catch alse
// async function getUser(){
//     try {
//         const response= await fetch('https://api.github.com/users/rohit62043');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getUser();

//use then/catch
fetch('https://api.github.com/users/rohit62043').then((response)=>{
    return response.json();
}).then((data)=>{
   console.log(data);
}).catch((e)=>{
    console.log(e);
})


//Note: we will observe that fetch wale ka result sabse phle aa rha hoga balji settime out ka code uper hai-->Q ki fetch ka queue ka priority jyada hota hai settimeout or setInterval wale queue se 
// Note:json() is asynchronous and returns a Promise object that resolves to a JavaScript object. JSON. parse() is synchronous can parse a string to (a) JavaScript object(s)
// Note:A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.
