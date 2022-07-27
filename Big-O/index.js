/**Good Code */

// Readable, Scalable (Big O for speed, and memory)
// JS has performance.now() to measure how many ms things take
// Need to determine what happens when input grows; the slower it slows down, the better
// Calculate operations performed to abstract performance analysis from machine
// During analysis what matters is how the line moves, not the relative steepness of it

/**O(n) */

// Increases linearly based on the input. n items = n operations
// Always takes a constant time, or KNOWN number of steps. 
// Even if multiple operations, still constant, so no matter the input runtime stays constant
// Assignments inside loop scale n, so 2 assignments in a loop would be 2n

/**Big-O Rules */

// Worst case
// Remove constants - even if input split because input is what matters
// Different terms for inputs
// Drop non-dominants - rule of thumb: add operations on same indent, multiply nested elements

/**O(n^2) */
const boxes = [1, 2, 3, 4, 5]; 

function logAllPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
                console.log(array[i] + "," + array[j]); // nested loops is quadratic or (O(n * n))
        }
    }
}

/**O(n!) */
// Nested loop for EVERY element in the input

/**Pillars of Programming */
// Readable
// Memory: more memory, less speed
// Speed: more speed, less memory

/**Space Complexity */
// Measure of how much memory is being allocated
// Heap: where variables are stored
// Stack: where functions are stored

// DO NOT care about size of input, only the space allocated/added by the function
function spaceTest(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(i);
    }
}

function spaceTest2(input) {
    let testArray = [];

    for (let i = 0; i < input.length; i++) {
        testArray[i] = 'test'; // make array size of input so space complexity is O(n n)
    }

    return testArray;
}