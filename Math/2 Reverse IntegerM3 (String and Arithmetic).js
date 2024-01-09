// Reverse Integer (Method 3: String and Arithmetic)

let reverse = function (x) {
  // Determine the sign of the original number

//   let multiplySign = x > 0 ? 1 : -1;

  // Reverse the string representation of the absolute value of x
//   let reversedNumber = parseInt(x.toString().split("").reverse().join("")) *multiplySign;
  let reversedNumber = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);

  // Check for overflow conditions
  if (reversedNumber > Math.pow(2, 31) - 1 || reversedNumber < Math.pow(-2, 31)) {
    console.log(0);
    return 0;
  }

  // Output the reversed number
  return reversedNumber;
};


// Sample Usage
console.log(reverse(-15300));

/*
Logic:
- Given an integer, reverse its digits using string manipulation and arithmetic.

Steps (Method 3: String and Arithmetic):
1) Determine the sign of the original number.
2) Reverse the string representation of the absolute value of x using string manipulation.
3) Multiply the reversed number by the determined sign to account for the original sign.
4) Check for overflow conditions according to the 32-bit signed integer range.
5) Output the reversed number.

Dry Run:
- Input x = -15300
- Determine the sign: multiplySign = -1
- Reverse the string: "00351"
- Multiply by the sign: reversedNumber = -351
- Output -351
*/
