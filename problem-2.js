// Problem 2: Sum of a Rang of numbers ( 1 to N)
// 7 = 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28

// without function:

// let number = 7;
// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log("i=>>", i);
// }

// console.log("Sum=>>", sum);

// with function:

function sumRang(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
  sum = sum + i;
  console.log("i=>>", i);
}
return sum;
}
console.log(sumRang(7));
console.log(sumRang(4));  