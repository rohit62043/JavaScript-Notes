// Immediately Invoked Functional Expression(IIFE)
// uses
// 1)For connection of databes just application start
// 2)Dont need pollution from global scope

((name)=>{
    console.log(`Hello ${name} , DB connectec sucessfully`);
})("Rohit");

(()=>(`DB connectec sucessfully`))();