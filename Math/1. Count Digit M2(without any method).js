// Count Digits (Method 2: Brute Force without using any method)

function splitter ( n ){
 
  let count = 0, newNo = n;
    // console.log(newNo);
  
  
  while(newNo >0){
    let rem = newNo%10;
    // console.log(rem);
    if(rem != 0 && n % rem == 0){
    // Ensure rem is not zero and n is divisible by rem
        // This check prevents potential division by zero scenarios
        // and ensures accurate counting of digits that evenly divide 'n'.

      count ++;
    }
    newNo = Math.floor(newNo/10);
    // console.log(newNo);
  }
  
  
  return count;
}

let n = 373;
console.log(splitter(n));

/*

You are given a number ’n’.
Find the number of digits of ‘n’ that evenly divide ‘n’.

  Logic - A digit evenly divides 'n' if it leaves no remainder when dividing  "n".

  example Input "n" = 336 
  output : 3

 Explanation:
	336 is divisible by both ‘3’ and ‘6’. Since ‘3’ occurs twice it is counted two times.

L

Steps (Method 2: Brute Force):
1) Given a number 'n'.
  1.1) Initialize a count variable to store the total number of digits that divide the number.
  1.2) Initialize a newNo variable and copy the value of the given number into it for operations.
2) While newNo is greater than 0:
  2.1) Take out the last digit of the number by finding the remainder when divided by 10.
  2.2) Check if the given number is divisible by the remainder digit.
  2.3) If divisible, update the count variable.
  2.4) Update newNo by setting it to newNo divided by 10.(newNo/10)
3) Continue this process until newNo becomes 0 or less than 0.
4) Return the final count.



Dry Run:
- Input "n" = 373
- Initialize count = 0, newNo = 373
- While newNo is greater than 0:
  - rem = 3, n % rem = 1 (not divisible, count = 0)
  - newNo = 37
  - rem = 7, n % rem = 1 (not divisible, count = 0)
  - newNo = 3
  - rem = 3, n % rem = 1 (not divisible, count = 0)
  - newNo = 0
- Return the final count: 0

 */