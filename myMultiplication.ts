/**
 * Regular multiply implementation using multiplication operator
 * 
 * @param {number} num1
 * @param {number} num2
 */
const regularMultiply = (num1: number, num2: number): number => {
  let result: number = num1 * num2;
  return (result);
}

/**
 * My multiply implementation using iterative approach /wo multiplication operator
 * 
 * @param {number} num1
 * @param {number} num2
 */
const myMultiply = (num1: number, num2: number): number => {
  let result: number = 0;
  let number1: number = num1;
  let number2: number = num2;

  if (number1 === 0 || number2 === 0) {
    return 0;
  }
  // Setting smaller value of input to number1 to minimize # of loops run
  if (num2 > num1) {
    number1 = num2;
    number2 = num1;
  }
  for (let i = 0; i < Math.abs(number2); i += 1) {
    result += number1;
  }

  return (number2 < 0 ? -result : result);
}

/**
 * GeeksForGeeks multiply implementation using recursive approach /wo multiplication operator
 * 
 * @param {number} num1
 * @param {number} num2
 */
const recursiveMultiply = (num1: number, num2: number): number => {
  /* 0 multiplied with anything gives 0 */
  if (num2 == 0)
    return 0;

  /* Add num1 one by one */
  if (num2 > 0)
    return (num1 + recursiveMultiply(num1, num2 - 1));

  /* the case where num2 is negative */
  if (num2 < 0)
    return -recursiveMultiply(num1, -num2);

  return (-1);
}

/**
 * Run all 3 multiply functions for comparison
 * 
 * @param {number} num1
 * @param {number} num2
 */
const runAllMultiply = (num1: number, num2: number): void => {
  let regultResult, myResult, recursiveResult;

  console.info(`
  Result of ${num1} * ${num2}
--------------------------`);

  console.time(`  regularMultiply`);
  regultResult = regularMultiply(num1, num2);
  console.timeEnd(`  regularMultiply`);

  console.time(`       myMultiply`);
  myResult = myMultiply(num1, num2);
  console.timeEnd(`       myMultiply`);

  console.time(`recursiveMultiply`);
  recursiveResult = recursiveMultiply(num1, num2);
  console.timeEnd(`recursiveMultiply`);

  console.log(`
     regultResult: ${regultResult}
         myResult: ${myResult}
  recursiveResult: ${recursiveResult}
--------------------------`);
}

runAllMultiply(27, 19);
runAllMultiply(-3, 7);
runAllMultiply(329, -6);
runAllMultiply(-603, -378);
runAllMultiply(2532, 3233); // my approach starts taking longer and recursive starts taking exponentially longer
//runAllMultiply(1283128, 21939); // recursive apporach has call stack overflow
