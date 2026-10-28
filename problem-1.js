// problem 1:  check if a number is Even or Odd

// without function

// let number = 10;

// if (number % 2 === 0)  {
//     console.log("Even number");
// } else {
//     console.log("Odd number");
// }

// with function

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even number";
  } else {
    return "Odd number";
  }
}

console.log(checkEvenOrOdd(26));
console.log(checkEvenOrOdd(501));
console.log(checkEvenOrOdd(100));