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

/**Stacks */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LLStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
            this.bottom = node;
        } else {
            const pointer = this.top;
            this.top = node;
            this.top.next = pointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null; // removing only item should mean bottom is null
        }
        
        const pointer = this.top;
        this.top = this.top.next;
        this.length--; 
        return pointer;
    }

    isEmpty() {
        return this.length === 0;
    }
}


class ArrayStack {
    constructor() {
        this.stack = [];
    }

    peek() {
        return this.stack[this.stack.length - 1]; // going to grab the latest item, which would be last in the array
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        return this.stack.pop(); // slow because indices need to be shifted
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}


/**Queue */

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        
        if (this.length === 0) {
            this.first = node;
            this.last = node;    
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.first = null;
            this.last = null;
            this.length--;
            return this.first;
        }

        const pointer = this.first;
        this.first = pointer.next;
        this.length--;
        return pointer;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class QueueWithStack {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
  }