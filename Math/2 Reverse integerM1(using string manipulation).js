// Reverse Integer (Method 1: String Manipulation)

let reverse = function (x) {
  let newNo = x.toString().split("").reverse().join("");
  // console.log(newNo);
  // console.log(newNo.split("-").join("");

  if (x < 0) {
    newNo = newNo.toString().split("-").join("");
    newNo *= -1;
  }

  if (newNo > Math.pow(2, 31) - 1 || newNo < Math.pow(-2, 31)) {
    console.log(0);
    return 0;
  }

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
3) Check if the reversed number is within the 32-bit signed integer range.
4) Return the reversed number. and make it's type== number befor returning 

Dry Run:
- Input x = 1534236469
- Convert x to string: "1534236469"
- Reverse the string: "9646324351"
- Output 0 (since 9646324351 exceeds the 32-bit signed integer range)
*/
