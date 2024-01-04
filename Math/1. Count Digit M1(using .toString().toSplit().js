// Count Digits (Method 1: using .toString and .split)


function splitter(n) {
  // Convert the number to a string and split it into an array of digits
  let newNo = n.toString().split("");
  console.log(newNo);

  let count = 0;

  // Iterate over the digits array
  for (let i = 0; i < newNo.length; i++) {
    // Check if the number is divisible by the current digit
    if (n % newNo[i] == 0) {
      // Increment the count if divisible
      count++;
    }
  }

  // Return the count of digits that evenly divide 'n'
  return count;
}

// Sample Usage
let n = 336;
console.log(splitter(n));

/*
You are given a number ’n’.
Find the number of digits of ‘n’ that evenly divide ‘n’.
  Logic - A digit evenly divides 'n' if it leaves no remainder when dividing  "n".

  example Input "n" = 336 
  output : 3

 Explanation:
336 is divisible by both ‘3’ and ‘6’. Since ‘3’ occurs twice it is counted two times.

Steps:
1) Given a number 'n'.
2) Convert the number to a string and split it into an array of digits,using .toString().split("")
3) Iterate over the digits array.
4) Check if the number is divisible by the current digit.
5) Increment the count if divisible.
6) Return the count of digits that evenly divide 'n'.

Dry Run:
- Input "n" = 336
- Convert to string and split: newNo = ['3', '3', '6']
- Iterate over the digits:
  - Check if 336 is divisible by '3': Yes (count = 1)
  - Check if 336 is divisible by '3': Yes (count = 2)
  - Check if 336 is divisible by '6': Yes (count = 3)
- Return the final count: 3
*/
