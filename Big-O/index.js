/**Good Code */

// Readable, Scalable (Big O measures this), Predictable
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

/**Big-O Cheatsheet */