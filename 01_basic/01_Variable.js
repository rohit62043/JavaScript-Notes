const accountId = 12345
let accountEmail ="123@gmail.com"
var accountPassword="12345"
accountCity = "Jaipur"; //Avoid create vatiable like this
let accountState //by default undefine

console.log([accountEmail,accountId,accountPassword,accountCity]);
console.table([accountEmail,accountId,accountPassword,accountCity]);
// accountId=2 //not allowed as it is constant

/*Note:
Avoid using var because of issue in block scope and functional scope
*/  