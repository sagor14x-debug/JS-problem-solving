//factorial of a number

//without function:

// let number = 5;

// let result = 1;

// for(i = 1; i <= number; i++) {
//     console.log("i==>",i);
//     result = result * i;
// }
// console.log("result ==>", result);



// with function:

function getFactorial(number) {
    let result = 1;
    for(i = 1; i <= number; i++) {
    console.log("i==>",i);
    result = result * i;
}
return result;
}

let factorialOffFour = getFactorial(4)
let factorialOffFive = getFactorial(5)

// console.log(factorialOffFour);
console.log(factorialOffFive);