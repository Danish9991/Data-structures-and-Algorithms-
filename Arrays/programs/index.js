/**
 * reverseAString1 is a function which returns the reverse of the string by using for loop
 * @param {*} str
 * @returns
 */

const reverseAString1 = (str) => {
  const reversedArr = [];
  for (let i = str.length; i >= 0; i--) {
    reversedArr.push(str[i]);
  }
  return reversedArr.join("");
};

/**
 * reverseAString2 is a function which returns the reverse of the string by using inbuilt javascript function
 * @param {*} str
 * @returns
 */

const reverseAString2 = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseAString1("hi im jhon"));
console.log(reverseAString2("hi im doe"));
