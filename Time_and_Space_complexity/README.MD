Certainly! Here's the full Markdown of the provided notes:

```markdown
# Time and Space Complexity in JavaScript

## Which Code is Best?

## There are 3 pillars that we check to answer this:

1. **Readability of the Code**
2. **Memory Consumption (Space Complexity)**
3. **Speed or Number of Operations (Time Complexity)**

## Scalable Code Notes

**Key Goal:** Code that handles more work/data without slowdowns or major changes.

### Characteristics

1. **Efficient Algorithms:**
   - Low time/space complexity (Merge Sort, Hashing, DP).

2. **Modular Design:**
   - Smaller, independent modules with clear interfaces.
   - Aimed for reuse, maintainability, and parallel execution.

3. **Data Structure Optimization:**
   - Choose based on task needs (Hash tables, trees, linked lists).

4. **Caching:**
   - Store frequently accessed data for faster retrieval.

5. **Load Balancing:**
   - Distribute work across multiple systems to avoid bottlenecks.

6. **Async Programming:**
   - Handle long tasks without blocking others (I/O, DB calls).

7. **Concurrency:**
   - Run multiple tasks simultaneously (multi-core systems, careful sync needed).

8. **Cloud Infrastructure:**
   - Dynamically provision resources based on demand.
   - Ensures cost-effectiveness and flexibility.

9. **Continuous Monitoring:**
   - Regularly check performance and address bottlenecks proactively.

10. **Optimization:**
    - Improve code, algorithms, and infrastructure for ongoing efficiency.

**Think of it like a flexible building:**
   - Designed to expand with more people (data/work).
   - Smaller, well-connected rooms (modules).
   - Efficient storage solutions (data structures).
   - Optimized pathways and services (caching, load balancing).
   - Adaptable infrastructure (cloud).
   - Regular maintenance and improvements (monitoring, optimization).
   - Scalable code is future-proof!

## Overview

Big O is a mathematical measure to evaluate code efficiency in terms of time and space complexity.

## Time Complexity

Measured by the number of operations, not actual time. Determines which code runs faster.

## Space Complexity

Measures memory usage, comparing how much space different codes use.

#### Greek Letters and Cases

Three Greek letters represent different cases in time and space complexity:

1. **Omega (Ω):** Best case scenario.
2. **Theta (Θ):** Average case scenario.
3. **Omicron (Big O):** Worst case scenario.

Big O always represents the worst-case scenario. There is no best case Big O or average case Big O.

## Drop Constants

Drop constants are also referred to as remove constants. Removing constants simplifies analysis.

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

// Simplified to O(n)
```

**Output:**
```
0
1
2
0
1
2
```

When we run this code, we observe that the output consists of `n` numbers from the first for loop and another `n` numbers from the second for loop. The code runs for (n + n) or 2n times in the worst case, and what we do is we drop the constants and we say that our code runs for O(n), so the time complexity is O(n).

## O(n^2) and Simplification

Nested loops often result in O(n^2). We simplify to the highest power.

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Simplified to O(n^2)
```

**Output:**
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

In this example, the nested loops result in a total of `n * n` outputs, so the time complexity is O(n^2). Even if we have O(n^3) or O(n^4), we simplify it to O(n^2).

```javascript
function logItems(n){
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      for (let k = 0; k < n; k++){
        console.log(i, j, k);
      }
    }
  }
}

// Time complexity is still O(n^3), not O(n^2)
```

## Drop Non-Dominants

Focus on the worst-case scenario, dropping less significant terms.

```javascript
function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}

// Simplified to O(n^2)
```

**Output:**
```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
0
1
2
```

Here, the first nested for loop runs for O(n^2) time, and the second outside loop runs for O(n) times. If we find out the total time complexity, it is T = O(n^2 + n). Since `n` is insignificant compared to `n^2`, it doesn't affect the number of operations.
**For example**, if we take n = 100, then n^2 will be 10000 and n = 100, so that's not affecting the number of operations, and so we ignore it and take. Therefore, we remove `n`, and we drop non-dominants, resulting in O(n^2) as the worst-case time complexity.

## O(1) - Constant Time

The most efficient scenario, O(1), represents constant time, also referred to as constant time.

```javascript
function addItems(n) {
  return n + n;
}

// Simplified to O(1)
```

In the above code, all we are doing is one operation: addition. The number of operations is one, so it doesn't matter if `n` is 1 or `n` is a million; the number of operations is going to be one.

**Let's take another code:**

```javascript
function addItems(n){
  return n + n + n + n + n;
}
```

In the above code, we are doing four operations. We are doing four additions. But it's still O(1) as we are simplifying this.

So, O(1) is referred to as constant time

. In this situation, where we have four operations (two additions), it's four operations that are constant, no matter what `n` is. The number of operations does not change as `n` changes.

#### NOTE - BASICALLY, Time complexity is the measurement of the number of operations. So, in the above case, the number of operations is still 1.

## O(log n) - Binary Search

Efficient for searching sorted arrays.

In binary search, we efficiently locate an element in a sorted array by repeatedly dividing the array in half until we find the desired item or conclude that it doesn't exist.

### Example

Consider the sorted array: [1, 2, 3, 4, 5, 6, 7, 8]

We find the item '1' using the following steps:

1. [1, 2, 3, 4]
2. [1, 2]
3. [1]

In this case, it took 3 steps to locate the item '1' for an array of size 'n'.

### Time Complexity

To generalize this, the time complexity is determined by the number of steps it takes to find the item in relation to the size of the array.

In the example, we had 2^3 = 8 (the size of the array), and log base 2 of 8 is 3.

Therefore, the time complexity of binary search is O(log n base 2).

### Divide and Conquer

Binary search follows the divide and conquer strategy, breaking down a problem into smaller sub-problems until they are easily solvable.

### Sorting Algorithms

Additionally, sorting algorithms often exhibit a time complexity of O(n log n), and binary search is a key component of these algorithms.

```javascript
// Example of binary search
// Time complexity is O(log n base 2)
```

**Output:** No visible output as it is an example of binary search.

## Different Terms for Inputs

Handle different inputs by representing them as variables.

```javascript
function logItems(a, b) {
  for (let j = 0; j < a; j++) {
    console.log(j);
  }

  for (let k = 0; k < b; k++) {
    console.log(k);
  }
}

// Time complexity is O(a + b)
```

Both loops run for different times. For example, `a` can be 10, but `b` can be a million. So we cannot say that the time complexity is O(n + n) or O(2n); it is O(a + b). This holds true for nested loops as well:

```javascript
function logItems(a, b) {
  for (let j = 0; j < a; j++) {
    for (let k = 0; k < b; k++) {
      console.log(k);
    }
  }
}

// Time complexity is O(a * b)
```

## Big O of Arrays

Different array operations have varying time complexities:

1. **Push/Pop:** O(1) - These operations don't require changing indices of the array.
2. **Shift/Unshift:** O(n) - Shifting and unshifting require reindexing every element in the array, that's why O(n) operations so time complexity O(n).
3. **Middle Operations:** O(n) - Adding or removing from the middle of the array requires reindexing.

For example:

```javascript
myArray.splice(1, 0, "hi");
```

So we still have to reIndex the array elements from the point we add or remove elements.
So T = O(1/2 n)
but we don't take avg case in big O we take worst case and also we remove constant so therefore.

T = O(n)

4. **Finding an Item:**
   - a) O(n) for linear search
   - b) O(1) for index search. If you need to access elements by index, arrays are efficient.

**Note - If you need to access things by index, arrays are a great data structure. If you need to add or remove things from the beginning, maybe it's not the best data structure for you, and you should consider a different data structure.**

---

![Image 1](JS_Dsa/Time_and_Space_complexity/image1.png)
![Image 2](JS_Dsa/Time_and_Space_complexity/image2.png)
![Image 3](JS_Dsa/Time_and_Space_complexity/image3.png)

#Big O Cheat Sheet:

-Big Os

O(1) Constant- no loops

O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)

O(n) Linear- for loops, while loops through n items

O(n log(n)) Log Linear- usually sorting operations

O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two nested loops

O(2^n) Exponential- recursive algorithms that solve a problem of size N

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

when a programm executes things it has two ways to remember things.

1) Heap . - It is usually where we store variables that we assign value.
2) Stack - It is where we keep track function call.

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
`"hellllllldfdfljfsfjsf".length //O(1) Time complexity`

A `string length lookup in JavaScript` is not a `method` it is `just a property` (.length property) that's why it is just of O(1).
It can be different in other languages.

# NOTE - BIG O says which functions, algorithms, or code is best.
```