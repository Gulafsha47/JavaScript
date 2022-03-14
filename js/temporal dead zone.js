
//case 1:Cannot access before initialization in case of let

// console.log(a);
// let a = 100;
// var b = 10;


//case 2:Can access after initialization in case of let
//  let a = 100;
// console.log(a);
//  var b = 10;


//case 3:ReferenceError
// console.log(a);
// let a = 100;
// var b = 10;


//case 4: we can initialized later in case of "let"

// let a;
// const b = 1000;
// a = 100;
// console.log(a);

//case 5: we can't initialized later in case of "const"->Missing initializer in const decleration
// let a;
// const b;
// b = 100;
// a = 10;
// console.log(b);

//case 5:Type error->initialization+Decleration should be present at the same time->we can't assign the value lateron

// let a = 100;
// const b = 1000;
// b = 10000;
// console.log(a);


//case 6:Syntax error
// let a = 100;
// const b;
// console.log(a);


//case 6:Reference error->cannot access before initialization
console.log(a);
let a = 1000;

const b = 100;
a = 10;
console.log(a);
