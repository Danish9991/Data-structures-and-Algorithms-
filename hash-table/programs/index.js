// WAP to return first recurring/repeating character from array

/**
 * firstRecurringCharacter method return the repeating character from array
 * Time Complexity O(n^2)
 * Space Complexity O(1)
 * @param {*} input
 * @returns
 */

const firstRecurringCharacter = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
};

/**
 * firstRecurringCharacter2 method using the efficient method to return first repeated element from an array
 * Time Complexity O(n)
 * Space Complexity O(n)
 * @param {*} input
 * @returns
 */

const firstRecurringCharacter2 = (input) => {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      return input[i];
    }
    map[input[i]] = i;
  }
};

console.log(firstRecurringCharacter([2, 5, 1, 1, 2, 4, 9, 6]));
console.log(firstRecurringCharacter2([2, 5, 1, 1, 2, 4, 9, 6]));
