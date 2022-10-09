/** Exercise 02 - Reverse **/

// Add your code here

// Function to reverse digits of a number
const reverseDigits = (num) => {
  let reversed_num = 0;
  while (num !== 0) {
    const digit = num % 10;
    reversed_num = reversed_num * 10 + digit;
    num = Math.trunc(num / 10);
  }

  return reversed_num;
};

let button = document.getElementById("reverse");

// Behavior for reverse submission
// Returns error when input is not a valid number
// Returns reversed number when input is valid
button.onclick = () => {
  const num = document.getElementById("input").value;
  let output = document.getElementById("output");

  if (num.toString().length !== 8) {
    console.log(num);
    output.style.color = "red";
    output.innerText = "Error: Please input an 8-digit number";
  } else {
    const reversed_num = reverseDigits(num);
    output.style.color = "green";
    output.innerText = `${num} --> ${reversed_num}`;
  }
};
