// if (true)
// {
//     var a = 10;
//     console.log(a);
// }


//case 1: block and global scope
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);


//case 2: shadowing->var
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);


//case 3:shadowing->let
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);

//case 4:Shadowing->const
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);

//case 5:it behaves similar in case of function also

// const c = 100;
// function x() {
//     const c = 30;
//     console.log(c);
// }

// console.log(c);


// case 6:illegal shadowing->a has already defined
// let a = 20;
// {
//     var a = 10;
// }


//case 6:legal
// var a = 20;
// {
//     let a = 10;
// }

//case 6:var is also legal in function scope

// let a = 20;
// function x() {
//     var a = 20;
// }

//case 7:lexical scope->Each block has its own scope
// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//         console.log(a);
       
//     }
    
// }


//case 8:scope inside scope
const a = 20;
{
    const a = 100;
    {
        const a = 200;
    }
}
    console.log(a);
       
    
    

