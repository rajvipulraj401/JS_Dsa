  # 4 Problem Solving Approach (basic approach)


## Define what is an algorithm ?

A `process or set of steps` to accomplish a certain task.


## Why do i need to know this ?

Almost everything that you do in programming involves some kind of algorith m! 
It's the foundation for being a succcessful problem solving and developer .


## How do you imporve ?

1. Devise a plan for solving problems
2. Master common problem solving patterns


# Problem Solving 

1.Understand the Problem

2.Explore Concrete Examples

3.Break It Down

4.Solve/Simplify

5.Look Back and Refactor



## 1. Understand The Problem


1) Can i restate the problem in my own words so that i can understand the problem?

2) what are the inputs that go into the problem?
 
3) what are the outputs that should come form the solution to the problem?

4) Can the outputs be determined from the inputs ? In other words, do I have enought information to solve the problem ? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering  the question at this early stage.)

5) How should i label the important pieces of data that are a part of the problem?




```javascript


/* 
Let's take an example.
Q) Write a function which takes two numbers and returns their sum.


1.Can i restate the problem in my own words so that i can understand the problem?
// add two number 

2.what are the inputs that go into the problem?
// like -
// how large this number going to be because in some language there is an upper bound .
// Are we only working with two inputs ? what happens when someone don't give 2nd input or no input? what happens if someone gives more than 2 inputs?

->should it be ints? floats? what about string for large numbers?



3.what are the outputs that should come form the solution to the problem?

// Should it be integer or should be it float or string?

4.Can the outputs be determined from the inputs ? In other words, do I have enought information to solve the problem ? 

// What happens someone passes only 1 numbers . should we retun null 0


5. How should i label the important pieces of data that are a part of the problem?
*/
```




## 2. Explore Concrete Examples


### EXPLORE EXAMPLES
Start with Simple Examples
Progress to More Complex Examples
Explore Examples with Empty Inputs
Explore Examples with Invalid Inputs

```javascript

//for example--
//Q2)Write a function which takes in a string and returns counts of each character in the string.

// 1- Start with Simple Examples

charCount("aaaa") //{a:4,b:0}
charCount("hello") //{h:1,e:1,l:2,o:1}

// 2- Progress to More Complex Examples

"my phone number is 182763"

"Hello hi"
//Do we want to account for spaces , Casing , numbers, dollarsigns and other characters.

//3-  Explore Examples with Empty Inputs

charCount("")

// 4-  Explore Examples with Invalid Inputs

charCount(null)

```

## 3. Break it Down

Write steps in comments so that you can then code easily.

## 4. Solve/simplify

## 5. refactor.(try and improve your code)(readability )


![Alt Text](https://raw.githubusercontent.com/rajvipulraj401/JS_Dsa/main/Problem_Solving_Approach/code.png)


![Alt Text](https://raw.githubusercontent.com/rajvipulraj401/JS_Dsa/main/Problem_Solving_Approach/code2.png)