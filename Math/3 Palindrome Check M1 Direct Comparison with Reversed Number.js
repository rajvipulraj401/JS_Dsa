// Palindrome Check (Method 1: Direct Comparison with Reversed Number)

const isPalindromeDirect = function(x) {
  // Reverse the number using string manipulation
  let reversedNumber = parseInt(x.toString().split("").reverse().join(""));

  // Check if the reversed number is equal to the original number
  return x === reversedNumber;
}

// Sample Usage
let n = -121;
console.log(isPalindromeDirect(n));

/*
Logic:
- Given a number, check if it is a palindrome.

Steps (Method 1: Direct Comparison with Reversed Number):
1) Reverse the number using string manipulation.
2) Convert the reversed string back to an integer.
3) Check if the reversed number is equal to the original number.
4) If they are equal, it's a palindrome, return true; otherwise, return false.

Dry Run:
- Input x = -121
- Reverse the number: -121 becomes 121-
- Check if the reversed number is equal to the original number: false
- Output: false
*/
