/**Linear search */

// Find target value in list by checking each value sequentially. 
// O(1) best and O(n) worst case

/**Binary search */

// Divide and conquer, so log n time
// List needs to be sorted, and can then be better than O(n), b/c discarding half the items every run
// Data stored in a tree is more efficient

/**Graph and tree traversal */

// If traversal visits every node then must be linear time
// Better than list because graph/tree avoids linear search
// Better than array because faster insertion/deletion
// Better than a hashtable because hashtables are not ordered

/** BFS */

// Go horizontally across tree
// Uses more memory because needs references tto children of nodes visited at children
// Shortest path between nodes because searches closest first
// Good to use if know that node is in top of tree. Nodes searched first are closest to root
// Implemented with a queue

function breadthFirstSearch(items) {
     let currentNode = items.root; 
     let list = []; 
     let queue = []; // keep track of level to access children, can hurt memory because need to always add to it

     queue.push(currentNode); 

     while(queue.length > 0) {

        // Will grab the first item in list, and because set in breadth first fashion, will MOVE it from queue to list
        currentNode = queue.shift();
        list.push(currentNode.value); 

        // this pushes items into queue in breadth first fashion, looking at left then right child of current node
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
     }

     return list;
}

function breadthFirstSearchRecursive(items, queue, list) {
    if (queue.length === 0) {
      return list;  
    }

    let currentNode = queue.shift(); 
    list.push(currentNode.value)

    if (currentNode.left) {
        queue.push(currentNode.left);
    }

    if (currentNode.right) {
        queue.push(currentNode.right);
    }

    return breadthFirstSearchRecursive(items, queue, list);

}

/** DFS */

// Search follows branch all the way down, and then goes to nearest ancestor with unexplored child
// Less memory because do not need to store pointer to children
// Good for checking if path exists because always exploreing children
// Useful when node looking for might be at the bottom