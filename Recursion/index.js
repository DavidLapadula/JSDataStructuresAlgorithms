/**Intro */

// Define something when referring to itself
// Good for repeated subtasks, like looking through nested directories
// Downside is need memory to hold onto calls using memory allocation
// Need a base case. Once the base case hits, the value bubbles up and the 'return' gets called against all previous functions in the stack
// Typically 2 returns, base case and recursive case. Each recursive return gets closer to value needed