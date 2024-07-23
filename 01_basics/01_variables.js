const accountId = 1234
let accountEmail = "varun@gmail.com"
var accountPassword = "123456"
accountCity = "hyd"
let accountState;


accountEmail = "v@gmail.com"
accountPassword = "123"
accountCity = "pune"

accountCity = "uganda"

console.log(accountId);

/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity, accountState])