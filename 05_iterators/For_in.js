const myObject = {
    'game1' : "IGI 1",
    'game2' : "IGI 2",
    'game3' : "NFS"
}

// for (const key in myObject) {
//     console.log(key);
// }
for (const key in myObject) {
    console.log(key+" : "+myObject[key]);
}

const hero=["superman","spiderman","balveer","saktiman"];
for(const index in hero){
    console.log(index+" : "+hero[index]);
}

const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");

// for(const key in map){
//     console.log(key+" : "+mp[key]);
// }
//There will be no iutput of above for in loop because map are not iterable like this
