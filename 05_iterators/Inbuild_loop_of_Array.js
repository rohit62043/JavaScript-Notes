//*****array.forEach(function)*********
const arr=["a","b","c","d"];
arr.forEach((char)=>{
    console.log(char);
})
//forEach doenot return anything
// let newarr=arr.forEach((char)=>{
//     return char;
// })
// console.log(newarr);

//we can do above task like this
let newarr=new Array();
arr.forEach((char)=>{
    newarr.push(char);
})
console.log(newarr);

//more parameter
arr.forEach((item,index,array)=>{
    console.log(item,index,array);
})

const myCoding = [
    {
        langaugeName:"javascript",
        langaugeFileName:"js"
    },
    {
        langaugeName:"C++",
        langaugeFileName:"cpp"
    },
    {
        langaugeName:"Python",
        langaugeFileName:"py"
    }
]

myCoding.forEach((obj)=>{
    console.log(`${obj.langaugeName} has file name ${obj.langaugeFileName}`);
})

//*****Filter***** */

const myNums = [1,2,3,4,5,6,7,8]

// const newNums=myNums.filter((val)=>{
//     return val>4;
// })

// we can do this using forEach loop also

const newArr=[];
myNums.forEach((val)=>{
    if(val>4){
        newArr.push(val)
    }
})
console.log(newArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //give all book which is publish after 1993
const book1=books.filter((obj)=>(obj.publish>1993 && obj.genre=="History"));
console.log(book1);

