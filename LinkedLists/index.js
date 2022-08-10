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

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
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

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1); // get the item before the place you want to insert
        const holdingPoint = leader.next;

        leader.next = newNode;
        newNode.next = holdingPoint;
    }

    delete(index) {
        if (index >= this.length) {
            return; 
        }

        if (index === 0) {
            this.head = this.head.next; // JS wil garbage collect head
        }

        const leader = this.traverseToIndex(index - 1);
        const deleteNode = leader.next;

        leader.next = deleteNode.next;
        this.length--;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.prepend(20);
myLinkedList.insert(2, 105);
myLinkedList.printList();

/**Doubly LL */

// Allow traversing list in reverse order because additional pointer to previous
// Lookup could be O(n / 2) because knowing which half the index is in and can start on either end
// Downside is more memory

class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head; // tail is how you track the last item, for appending
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
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

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1); // get the item before the place you want to insert
        const holdingPoint = leader.next;

        leader.next = newNode;
        newNode.next = holdingPoint;
    }

    delete(index) {
        if (index >= this.length) {
            return; 
        }

        if (index === 0) {
            this.head = this.head.next; // JS wil garbage collect head
        }

        const leader = this.traverseToIndex(index - 1);
        const deleteNode = leader.next;

        leader.next = deleteNode.next;
        this.length--;
    }
}