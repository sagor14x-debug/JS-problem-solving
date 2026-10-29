// FizzBuzz(i to N)
//Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.


// without function:
// let number = 15;

// for (let i = 1; i <= number; i++) {
//     console.log("i ==>", i);
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }


// with function:

// function checkFuzzBuzz(number) {
// // let number = 15;

// for (let i = 1; i <= number; i++) {
//     console.log("i ==>", i);
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }else {
//         console.log(i);
//     }
// }
// }
// let result = checkFuzzBuzz(15);
// console.log(result);






function checkFizzBuzz(number) {
  let result = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

let output = checkFizzBuzz(15);
console.log(output);
