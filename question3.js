//Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
//examples.
//ans: >>
//Loops! One of the most fundamental concepts in programming.
//Loops are a way to execute a block of code repeatedly for a specified number of times or until a certain condition is met.
 //They allow you to perform repetitive tasks, iterate over data structures, and control the flow of your program.

// Loops are essential in programming because they enable you to:

//Repeat tasks:   Perform a task multiple times without writing the same code over and over.
//Iterate over data:   Process each element of a collection, such as an array or list.
//Control program flow:   Make decisions based on conditions and repeat actions until a desired outcome is achieved.

//Types of Loops

//There are several types of loops, each with its own syntax and use cases. Here are the most common ones:
//1. For Loop
//A for loop is used to iterate over a sequence (such as an array, list, or string) and execute a block of code for each element.
//syntax :>>
for (initialization; condition; increment/decrement) {
    // code to be executed
  }
  
fruits = ['apple', 'banana', 'cherry']
for (fruit in fruits)
    print(fruit)
//2. while Loop
//The while loop repeats a block of code as long as a specified condition is true.
 //It is often used when the number of iterations is not known beforehand.
 //syntax:>>
 while (condition) {
    // code to be executed
  }
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  //3. do...while Loop
  //The do...while loop is similar to the while loop, 
  //but it ensures that the code block is executed at least once before checking the condition.   
  do {
    // code to be executed
  } while (condition);
  let (i = 0)
  do {
    console.log(i);
    i++;
  } while (i < 5);
  //4. for...in Loop
//The for...in loop is used to iterate over the properties of an object (enumerable properties).
for (variable in object) {
    // code to be executed
  }
  const person = { name: "John", age: 30, city: "New York" };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  //5. for...of Loop
  //The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).    
  for (variable of iterable) {
    // code to be executed
  }
  const arr = [10, 20, 30];
  for (let value of arr) {
    console.log(value);
  }
    
     