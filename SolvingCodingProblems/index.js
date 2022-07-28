// Need to provide value to the company by solving THEIR problems
// Less about the solution and how you approach the problem

/**
 * 1) Analytical
 * 2) Coding
 * 3) Technical
 * 4) Communication
 */

// Checking for an item in an array, k,v pair in object for value existing and then see if its there
// Consider weird, i.e how to break the code
// Use built in methods of the language, just know what the time/space complexity is (array/object methods)
// Consider time AND space complexity

/** Two Sum */
// Is there is a pair in the array with the sum of another given
// Subtract sum from each element and see if result is in array will give answer

function hasPairWithSum(arr, sum) {
    const mySet = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (mySet.has[arr[i]]){
            return true
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}
