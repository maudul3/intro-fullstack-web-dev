/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

const fizzbuzz = () => {
  // Add your code here
  const nums = Array.from(Array(100).keys());
  nums.forEach((num) => {
    const count = num + 1;
    if ((count % 3 === 0) & (count % 5 === 0)) {
      console.log("fizzbuzz");
    } else if (count % 3 === 0) {
      console.log("fizz");
    } else if (count % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(count);
    }
  });
};

fizzbuzz();
// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...
