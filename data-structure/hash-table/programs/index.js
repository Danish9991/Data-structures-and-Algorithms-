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
  return undefined;
};

console.log(firstRecurringCharacter([2, 5, 1, 1, 2, 4, 9, 6]));
console.log(firstRecurringCharacter2([2, 5, 1, 1, 2, 4, 9, 6]));

//WAP to check whether the two array have any common item

/**
 * checkCommonItem method using an efficient approach to return true if any common element present in two arrays
 * Time Complexity O(n)
 * Space Complexity O(n)
 * @param {*} input1
 * @param {*} input2
 * @returns
 */

const checkCommonItem = (input1, input2) => {
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (input1[i] === input2[j]) {
        return true;
      }
    }
  }
  return false;
};

/**
 * checkCommonItem2 method return true if any common element present in two arrays
 * @param {*} input1
 * @param {*} input2
 * @returns
 */

const checkCommonItem2 = (input1, input2) => {
  let map = {};
  for (let i = 0; i < input1.length; i++) {
    if (!map[input1[i]]) map[input1[i]] = true;
  }

  for (let j = 0; j < input2.length; j++) {
    if (map[input2[j]]) {
      return true;
    }
  }
  return false;
};

console.log(checkCommonItem([3, 9, 0, 4], [8, 5, 6, 2, 1])); //false
console.log(checkCommonItem2([3, 9, 0, 4], [8, 5, 6, 0, 1])); //true
