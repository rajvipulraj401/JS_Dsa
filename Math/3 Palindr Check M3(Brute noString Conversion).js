// Palindrome Check (Method 3: Brute Force Without String Conversion)

function isPalindromeBruteForceNoString(x) {
   // Initialize variables to store reversed and original numbers
   let reversedNumber = 0;
   let originalX = x;

   // Reverse the number without string conversion
   while (x > 0) {
      // Extract the last digit
      let digit = x % 10;
      // Append the last digit to the reversed number
      reversedNumber = reversedNumber * 10 + digit;
      // Shrink x by discarding the last digit
      x = Math.floor(x / 10);
   }

   // Return the original and reversed numbers
   return { reversedNumber, originalNumber: originalX };
}

// Sample Usage
let numberToCheck = 121;
let result = isPalindromeBruteForceNoString(numberToCheck);

// Check if the original and reversed numbers are equal
if (result.originalNumber === result.reversedNumber) {
   console.log("Palindrome Number");
} else {
   console.log("Not Palindrome Number");
}

/*
Logic:
- Given a number, check if it is a palindrome.

Steps (Method 1: Brute Force Without String Conversion):
1) Initialize variables to store reversed and original numbers.
2) Reverse the number without string conversion using a while loop.
3) Extract the last digit, append it to the reversed number, and shrink the original number.
4) Return the original and reversed numbers.

Dry Run:
- Input x = 121
- Initialize reversedNumber = 0, originalX = 121
- While x is greater than 0:
  - Extract the last digit (1)
  - Append the last digit to reversedNumber (1)
  - Shrink x by discarding the last digit (12)
- Return { reversedNumber: 121, originalNumber: 121 }
- Check if the original and reversed numbers are equal: true
- Output: Palindrome Number
