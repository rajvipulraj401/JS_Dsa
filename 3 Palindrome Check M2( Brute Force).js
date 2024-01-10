// Palindrome Check (Method 2: Brute Force)

const isPalindromeBruteForce = function(x) {
  // Convert the number to a string
  let str = x.toString();

  // Iterate from the start to the middle of the string
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    // Compare each pair of digits
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  // If all pairs match, it's a palindrome
  return true;
}
// Sample Usage
let n = -121;
console.log(isPalindromeBruteForce(n));

/*
Logic:
- Given a number, check if it is a palindrome.

Steps (Method 2: Brute Force):
1) Convert the number to a string.
2) Iterate from the start to the middle of the string.
3) Compare each pair of digits.
4) If any pair doesn't match, return false.
5) If all pairs match, it's a palindrome, return true.

Dry Run:
- Input x = -121
- Convert x to string: "-121"
- Iterate from the start to the middle of the string:
  - Compare "-1" and "1": Not equal, return false
- Output: false
*/
