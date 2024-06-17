//Print all even numbers from 0 – 10
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Calculate the sum of numbers within an array
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
const array3 = [0.73, 4.5, 1.3, 0.44, 1.35, 2.2, -3.5, -1.6, 4.78];

console.log(sumArray(array1));
console.log(sumArray(array2));
console.log(sumArray(array3));

//Sort an array from lowest to highest
const sortArray = [2, 6, 3, 9, 5, 2, 3, 3, 4, 5, 6, 7, 9];

console.log(sortArray.sort());

//Return a Boolean if a number is divisible by 10
const numbers = [2, 6, 3, 9, 51, 2, 33, 4, 50, 6, 7, 9];
const divideNumber = numbers.map((number) => numbers % 10 === 0);

console.log(divideNumber);

//Create a function that filters out negative numbers
const filterArray = [2, -6, 3, 9, 5, -2, -3, 3, 4, 5, -6, 7, 9];
const filterNumber = filterArray.filter((item) => item <= 0);

console.log(filterNumber);

//Create a function that reverses an array
const reverseArray = [2, 6, 3, 9, 51, 2, 33, 4, 50, 6, 7, 9];
const reverseNumber = reverseArray.reverse();

console.log(reverseNumber);

//Return the number of vowels in a string
const vowels = "abcdefghijklmnopqrstuvw";
const numberOfVos = vowels.length;
console.log(numberOfVos);

//Remove the spaces found in a string
const spaces = "shbsjh ihdquiduqi dbwqidbqw wdbwidb dbwqidb";
const removeSpaces = spaces.replace(/\s/g, "");
console.log(removeSpaces);
