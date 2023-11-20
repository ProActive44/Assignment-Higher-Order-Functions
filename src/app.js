const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (start, end) => {
  let newFoods = [];
  for (let i = start; i < end - 1; i++) {
    newFoods.push(foods[i]);
  }
  return newFoods;
};

// Progression 2:
const spliced = () => {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
};

// Progression 3:
const checkNumber = (numberArray, operation) => {
  return numberArray.filter(operation);
};

const isEven = (number) => {
  return number % 2 == 0;
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return number > 1;
};
// Progression 4:

const reject = (numberArray) => {
  let nonPrimeArray = [];
  for (let i = 0; i < numberArray.length; i++) {
    isPrime(numberArray[i]) ? null : nonPrimeArray.push(numberArray[i]);
  }
  return nonPrimeArray;
};
const nonPrime = (numberArray) => {
  return reject(numberArray);
};

// Progression 5:

const isEvenUsingLambda = (number) => number % 2 == 0;

// Progression 6:
const findSquareOfNumbers = (myArray) => {
  return myArray.map((ele) => ele * ele);
};

// Progression 7:

const multiply = (myArray) => {
  return myArray.reduce((acc, curr) => acc * curr, 1);
};

const sumOfSquares = (myArray) => {
  return myArray.reduce((acc, curr) => acc + curr * curr, 0);
};
