//Like arrays, Linked Lists store data elements in sequential order. 
//Instead of keeping indexes, linked lists hold pointers to other elements.
//The first node is called the head while the last node is called the tail.
//In a singly - linked list, each node has only one pointer to the next node.
//Here, the head is where we begin our walk down the rest of the list.
//In a doubly - linked list, a pointer to the previous node is also kept.
//Therefore, we can also start from the tail and walk “backwards” toward the head

//Linked lists have constant-time insertions and deletions because we can just change the pointers

//To lookup or edit an element in a linked list, we might have to walk the entire length 
//which equates to linear time.With array indexes, however, such operations are trivial

//Like arrays, linked lists can operate as stacks. It’s as simple as having the head be 
//the only place for insertion and removal.Linked lists can also operate as queues.
//This can be achieved with a doubly - linked list, where insertion occurs at the tail 
//and removal occurs at the head, or vice versa

//For large numbers of elements, this way of implementing queues is more performant than 
//using arrays because shift and unshift operations at the beginning of arrays require linear time to re - index every subsequent element

//****On the client, state management libraries like Redux structure its middleware logic in a linked-list fashion****


//Doubly-Linked List
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    addToHead(value) {
        const node = new Node(value, null, this.head);
        if (this.head) {
            this.head.next = node
        } else {
            this.tail = node;
        };
        this.head = node;
    };

    addToTail(value) {
        const node = new Node(value, this.tail, null);
        if (this.tail) {
            this.tail.prev = node;
        } else {
            this.head = node;
        };
        this.tail = node;
    };

    removeHead() {
        if (!this.head) {
            return null;
        };
        const value = this.head.value;
        this.head = this.head.prev;
        if (this.head) {
            this.head.next = null;
        } else {
            this.tail = null;
        };
        return value;
    };

    removeTail() {
        if (!this.tail) {
            return null
        };
        const value = this.tail.value;
        this.tail = this.tail.next;
        if (this.tail) {
            this.tail.prev = null
        } else {
            this.head = null
        };
        return value;
    };

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return value;
            };
            current = current.prev;
        };
        return null;
    };

    indexOf(value) {
        const indexes = [];
        let current = this.tail;
        let index = 0;
        while (current) {
            if (current.value === value) {
                indexes.push(index);
            };
            current = current.next;
            index++;
        };
        return indexes;
    };
};



