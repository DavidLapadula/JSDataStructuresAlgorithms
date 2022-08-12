/**Intro */

// Linear data structures because must traverse sequentially. NO random access
// Higher level DS better because can limit the operations that can be performed

// Stack: LIFO, always getting the most recently added element
    // Function calls follow the stack model 
    // Implement with Array or LL. Arrays allow for cache locality BUT memory restricted. LL needs more memory but more dynamic sizing

// Queue: FIFO, first item in is the first to get removed
    // Like a printer waiting for jobs
    // Bad to use an array, because every operation requires shifting indices
    // Using LL allows for O(n) change to head or tail

/** JS refresher */
// Browser has JS engine that reads JS and converts to machine instructions
// Memory Heap is where items are allocated, but amount is limited, so could leak. Globals bad because can cause leak if not cleaned
// Call Stack reads and executes code, functions called in LIFO order
    // JS is single threaded because only has ONE call stack. Multiple stacks can cause deadlocks
    // On top of engine, JS has runtime environment with Web API's and event loop with callback queue
        // Web API's not part of JS and include DOM, AJAX, and timeouts 
        // Event loop checks call stack and if empty will check callback queue
        // Async callbacks used to not block the single thread

