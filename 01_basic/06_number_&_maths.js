const score=400;
console.log(score,typeof(score));

const balance = new Number(100);
console.log(balance,typeof(balance));

console.log(balance.toString().length);

const temp1="4.567abcdefgh123"
console.log(Number.parseFloat(temp1));
console.log(Number.parseInt(temp1));

const temp2=12.456;
console.log(temp2.toFixed(2)); //return a string

let num = 5.123456;

console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

num = 0.000123;

console.log(num.toPrecision()); // '0.000123'
console.log(num.toPrecision(5)); // '0.00012300'
console.log(num.toPrecision(2)); // '0.00012'
console.log(num.toPrecision(1)); // '0.0001'

// note that exponential notation might be returned in some circumstances
console.log((1234.5).toPrecision(2)); // '1.2e+3'

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));

console.table([Number.MAX_VALUE,Number.MIN_VALUE,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]);


//*********Maths********/
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.max(4,6,2,9,6));
console.log(Math.min(4,6,2,9,6));

console.log(Math.random());
console.log(Math.ceil(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);