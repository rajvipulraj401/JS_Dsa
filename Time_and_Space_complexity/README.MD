```markdown
# Time and Space Complexity in JavaScript


## which code is best?

## There are 3 pillars that we check to answer this .

1) Readability of the code .
2) memory consumption (space complexity )
3) speed it took or no of operations it took ( Time complexity)


## Scalable Code Notes:
Key Goal: Code that handles more work/data without slowdowns or major changes.

Characteristics:

Efficient Algorithms: Low time/space complexity (Merge Sort, Hashing, DP).
Modular Design: Smaller, independent modules with clear interfaces (for reuse, maintainability, parallel execution).
Data Struct. Optimization: Choose based on task needs (Hash tables, trees, linked lists).
Caching: Store frequently accessed data for faster retrieval.
Load Balancing: Distribute work across multiple systems to avoid bottlenecks.
Async Programming: Handle long tasks without blocking others (I/O, DB calls).
Concurrency: Run multiple tasks simultaneously (multi-core systems, careful sync needed).
Cloud Infrastructure: Dynamically provision resources based on demand (cost-effective, flexible).
Continuous Monitoring: Regularly check performance and address bottlenecks proactively.
Optimization: Improve code, algorithms, and infrastructure for ongoing efficiency.
Think of it like a flexible building:

Designed to expand with more people (data/work).
Smaller, well-connected rooms (modules).
Efficient storage solutions (data structures).
Optimized pathways and services (caching, load balancing).
Adaptable infrastructure (cloud).
Regular maintenance and improvements (monitoring, optimization).
Scalable code is future-proof!



## Overview

Big O is a mathematical measure to evaluate code efficiency in terms of time and space complexity.
@@ -273,4 +310,93 @@ T = O(n)
![Image 1](JS_Dsa/Time_and_Space_complexity/image1.png)
![Image 2](JS_Dsa/Time_and_Space_complexity/image2.png)
![Image 3](JS_Dsa/Time_and_Space_complexity/image3.png)
```
```


#Big O Cheat Sheet:

-Big OsO(1) Constant- no loops

O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)

O(n) Linear- for loops, while loops through n items

O(n log(n)) Log Liniear- usually sorting operations

O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
nested loops

O(2^n) Exponential- recursive algorithms that solves a problem of size N

O(n!) Factorial- you are adding a loop for every element

**Iterating through half a collection is still O(n)**
**Two separate collections: O(a * b)**

## -What can cause time in a function?-

Operations (+, -, *, /)
Comparisons (<, >, ==)
Looping (for, while)
Outside Function call (function())

## -Rule BookRule 1: Always worst Case
Rule 2: Remove Constants
Rule 3: Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
+ for steps in order
* for nested steps
Rule 4: Drop Non-dominant terms

# Space Complexity --

when a programm executes things it has two way to remember things .

1) Heap . - It is usually where we store variables that we assign value.
2) Stack - It is where we keep track function call . 



##-What causes Space complexity?-
Variables
Data Structures
Function Call
Allocations



Example Code *practise space complexity )*

```javascript
// Function with O(1) space complexity
function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooo!");
  }
}

booo([1, 2, 3, 4, 5]); // O(1) space complexity.

// Function creating an array of "hi" repeated N times
function arrayOfHiNTimes(n) {
  let hiArray = [];

  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }

  return hiArray;
}

arrayOfHiNTimes(6); // O(n) space complexity as it creates an array with length N
```


**NOTE** - 
`"hellllllldfdfljfsfjsf".length //O(1)` 

A `string length lookup in javascript` is not a `method` it is `just a property` (.length property) that's why it is justof O(1) . 
 It can be different in other languages.


# NOTE - BIG O says which functions , algorithm or code is best .