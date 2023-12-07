let myDate=new Date()
console.log(myDate,typeof(myDate));
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023,0,23) //month start from 0
// console.log(myCreatedDate.toDateString());
// let myCreatedDate2 = new Date(2023,0,23,5,3) //month start from 0
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3= new Date("2023-01-22")//yyyy-mm-dd month start from 1
let myCreatedDate4= new Date("2023-01-22")//dd-mm-yy month start from 1
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate4.toDateString());

//timestamp
let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(myCreatedDate3.getDate());
console.log(myCreatedDate3.getHours());
console.log(myCreatedDate3.getMonth()+1);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(`Today is ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    day:"2-digit"
}));