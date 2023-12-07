const name="Rohit";
const repoCount=50;

//Old method
//console.log("My name is "+name+" and my repoCount is "+repoCount);

//New method
//console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("RohitSingh");
// console.log(gameName, typeof(gameName)); //Object
// console.log(name,typeof(name)); //String
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

//const newString = gameName.substring(-8,4);
//console.log(newString);

//const newString2= gameName.slice(-8,4); //diffrence between slice and substring is that int slice we can use negative index
//console.log(newString2);
// const newString = gameName.substring(-8,4); here it will ignore negative index and treat it 0

// const newString3="       Rohit     ";
// console.log(newString3);
// console.log(newString3.trim());
// console.log(newString3.trimStart());
// console.log(newString3.trimEnd());

// const url="https://rohit.com/rohit%20singh"
// console.log(url.replace("%20","-"));
// console.log(url.includes("rohit"));//checks whether the string is present or not

const str = 'The-quick-brown-fox-jumps.';

const words = str.split('-');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


