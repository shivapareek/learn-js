const accountId = 1234567890;
let accountEmail = "shiva@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState ;


// accountId = 2; not allowed, const cannot be reassigned

accountEmail = "hc@hc.com";
accountPassword = "1234567890"; 
accountCity = "Delhi";

// console.log(accountId);

/*
Prefer not using var, use let or const instead.Because:
1. `var` is function-scoped, while `let` and `const` are block-scoped.
*/
console.table([accountId,accountEmail,accountPassword,accountCity , accountState]);