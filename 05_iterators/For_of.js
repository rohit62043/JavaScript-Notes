// For of

//[""," "," "]
//[{},{},{}]

const arr=[11,21,31,41,51,61];
let i=0;
for (const iterator of arr) {
    console.log(`${iterator} : value of index ${i++}`);
}
//We can use it for string also

//map
const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");

for(const [key,value] of map){
    console.log(key+" : "+value);
}

const myObject = {
    'game1' : "IGI 1",
    'game2' : "IGI 2",
    'game3' : "NFS"
}
// for(it of myObject){
//     console.log(it);
// }

// This will give error as object are not iterable using for of-->there are other ways we will learn later