/**Intro */

// Arrays bad any time need to shift index
// Null terminated; tail node will point to null

/**Pros and Cons */
// To insert still need to traverse items BUT items DO NOT need to be shifted because they are not indexed
// Traversing LL a bit slower because items distributed
// LL do have some order so can be sorted, unlike Hashtable
// Although insert/delete is O(n), USUALLY much better because wont always need to traverse


/**Pointer */

// 'Delete' only removes unused data, so could just delete reference to item, but item is still there
// When actual item in memory not used anymore, garbage collection will handle it


/**Implement LL */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head; // tail is how you track the last item, for appending
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode; // when its the first item, this.tail POINTS TO this.head
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(20);
console.log(myLinkedList);