/** Exercise 01 - Coins **/

const numberCoins = (coin_value, remaining) => {
  // Determines number of a specified coin that can be used for remaining balance

  // Map coin value to English words
  const coin_map = {
    1: { plural: "dollars", single: "dollar" },
    0.25: { plural: "quarters", single: "quarter" },
    0.1: { plural: "dimes", single: "dime" },
    0.05: { plural: "nickels", single: "nickel" },
    0.01: { plural: "pennies", single: "penny" },
  };

  // Determine number of coins needed for remaining balance
  let coins = 0;

  while (remaining.val >= coin_value) {
    coins += 1;
    remaining.val -= coin_value;
    remaining.val = Math.round(remaining.val * 100) / 100;
  }

  // create string combining number of coins and proper English word
  let str;
  if (coins > 1) {
    str = `${coins} ${coin_map[coin_value]["plural"]}`;
  } else if (coins === 1) {
    str = `${coins} ${coin_map[coin_value]["single"]}`;
  } else {
    str = ``;
  }

  // Modify str with comma if needed
  if ((remaining.val >= 0.01) & (coins > 0)) {
    str = `${str}, `;
  }

  return str;
};

const calculateChange = (input) => {
  // Check that input is valid
  if (input > 10) {
    return `${input} ==> Error: the number is too large`;
  }

  // Determine amount of coin for each coin type and produce as string
  remaining = { val: input };
  let dollars_str, quarters_str, dimes_str, nickels_str, pennies_str;

  dollars_str = numberCoins(1, remaining);
  quarters_str = numberCoins(0.25, remaining);
  dimes_str = numberCoins(0.1, remaining);
  nickels_str = numberCoins(0.05, remaining);
  pennies_str = numberCoins(0.01, remaining);

  return `${input} ==> ${dollars_str}${quarters_str}${dimes_str}${nickels_str}${pennies_str}`;
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
