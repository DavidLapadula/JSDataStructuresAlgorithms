// Optimization technique: break problems into sub problems and storing solutions. Caching results to use later

/** Memoization */

// cache a return value of a function based on parameter. Can later use cache so do no tneed to recalculate
// 1) can divide to subproblems? 2) Recursive 3) Repetitive subproblems 4) Memoize subproblems

/** Dynamic Programming */

// Fibonacci recursive is exponential because each call spawns 2 more calls, so each level is 2 ^ calls of that row

function fibonacci() {
    let cache = {}; 
    
    // Can use closure by function returning function, and keep cache the same on every iteration
    return function fib(n) {
        if (n in cache) return cache[n]; 
        
        if (n < 2) return n;
        
        cache[n] = fibonacci(n - 1) + fibonacci(n - 1);

        return cache[n]; 
    }
}