const myNum=[1,2,3,4,5];
const newNum=myNum.map((val)=>(val+10));
console.log(newNum);

//We can s=also do chaining of map
const newNum2=myNum.map((val)=>(val*10)).map((val)=>(val+1));
console.log(newNum2);
//We can s=also do chaining of map and filter
const newNum3=myNum.map((val)=>(val*10)).map((val)=>(val+1)).filter((val)=>(val>40));
console.log(newNum3);