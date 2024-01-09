// Reverse Integer (Method 1: String Manipulation)

let reverse = function (x) {
  // Convert the number to a string, split the string into an array, reverse the array, and join it back into a string.
  let newNo = x.toString().split("").reverse().join("");
  
  // If the original number is negative, remove the negative sign, reverse the string, and add the negative sign back.
  if (x < 0) {
    newNo = newNo.toString().split("-").join("");
    // Convert newNo to a number using the unary negation operator (-1) and also add the negative sign .
    newNo *= -1;
  }

  // Check if the reversed number is within the 32-bit signed integer range.
  if (newNo > Math.pow(2, 31) - 1 || newNo < Math.pow(-2, 31)) {
    console.log(0);
    return 0;
  }

  // Output the reversed number and return it as a float.
  console.log(newNo);
  return parseFloat(newNo);
};

// Sample Usage
reverse(-15300);

/*
Logic:
- Given a number, reverse it.

Steps (Method 1: String Manipulation):
1) Convert the number to a string, split the string into an array, reverse the array, and join it back into a string.
2) If the original number is negative, remove the negative sign, reverse the string, and add the negative sign back.
3) Convert newNo to a number using the unary negation operator (-1) to ensure it's treated as a number during multiplication.
4) Check if the reversed number is within the 32-bit signed integer range.
5) Output the reversed number and return it as a float.

Dry Run:
- Input x = -15300
- Convert x to string: "-15300"
- Remove the negative sign, reverse the string, and add the negative sign back: "-30151"
- Convert newNo to a number using the unary negation operator: -30151
- Output -30151
*/
