// TASK 1
let a = 3;
let b = 5;
let c; 

console.log(`
a + b    = ${a + b}
a - b    = ${a - b}
a * b    = ${a * b}
a / b    = ${a / b}
a % b    = ${a % b}

a += b   = ${a += b}   // now a is 8
a -= b   = ${a -= b}   // back to 3
a *= b   = ${a *= b}   // now 15
a /= b   = ${a /= b}   // back to 3
a %= b   = ${a %= b}   // still 3

a == b   = ${a == b}
a != b   = ${a != b}
a > b    = ${a >  b}
a < b    = ${a <  b}

!a && !c = ${!a && !c}
!a || !c = ${!a || !c}
`);

// TASK 2
let first_name = 'Artur';       
let last_name  = 'Ramos';        
let email      = 'ramo0081@algonquinlive.com'; 

let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

console.log(output);
