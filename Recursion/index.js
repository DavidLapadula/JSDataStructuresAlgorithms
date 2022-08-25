/**Intro */

// Define something when referring to itself
// Good for repeated subtasks, like looking through nested directories
// Downside is need memory to hold onto calls using memory allocation
// Need a base case. Once the base case hits, the value bubbles up and the 'return' gets called against all previous functions in the stack
// Typically 2 returns, base case and recursive case. Each recursive return gets closer to value needed

/**Factorial */

// Same time complexity as iterative O(n) but higher space complexity O(n) vs O(1)
function findFactorialRecursive(number) {
    if (number === 2) {
        return number; // check for 2 because final iteration is just multiplying by 1
    }

    return number * findFactorialRecursive(number - 1); // additional calls to factorial of smaller numbers, 5 x 4!, 5 x 4 x 3!

}

// 
function findFactorialIterative(number) {
    let answer = 1;

    for (let i = 2; i <= number; i++){
        answer = answer * i;
    }   

    return answer;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

/**Fibonacci - return nth number in Fibonacci sequence */

// starting at nth index and need to ADD two numbers preceeding the index you want. 10th index is 9th index + 8th index
// O(2 ^ n) because two calls for each value of n
function findFibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }

    return findFibonacciRecursive(n - 1) + findFibonacciRecursive(n - 2);
}

function findFibonacciIterative(n) {
    let arr = [0, 1]; // store known answers for n < 2

    for (let i = 2; i <= n; i ++) { // need to catch i === n because need to calculate values when i is equal to the desired index
        arr.push(arr[i - 2] + arr [i - 1]);
    }

    return arr[n];
}


console.log(findFibonacciRecursive(10));
console.log(findFibonacciIterative(10));