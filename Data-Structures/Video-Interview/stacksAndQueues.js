//Linear data strcutures - sequential, go thru it one by one




//***Remove the pointers and the garbage collector deletes the node***


//Stacks - LIFO
//Useful when you need to know the last value and important in lang specific engines
//Also Browser history (back or front button) uses stacks or undo and redo button

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    };
    //lets us see the very top element
    peek() {
        return this.top;
    };
    //lets us add a node to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            //hold reference to what was top orginally 
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        };
        this.length++;
        return this;
    };
    //remove from top of the stack
    pop() {
        //check first if there is an item
        if (!this.top) {
            return null;
        };
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        //It wouldnt be referred to anything and auto removed durring garbage collection - Languages like JS can handle this otherwise you need to add this in!
            //const holdingPointer = this.top;
        
        //underneath the top and then length brings it up and cuts this off/ garbage collected?
        this.top = this.top.next;
        this.length--;
        return this;

    };
    //check if stack is empty
    //isEmpty
};

myStack = new Stack();

myStack.peek();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");




//Queues - FIFO
//Buy tickets to a concert or a restuarant app
//Printer 
//Dont use queue to build an array - arrays if you unshift, you'll have to unsift all those other indexes!

class Queue {
    constructor(value) {
        this.first = null;
        this.last = null;
        this.length = 0;
    };

    peek() {
        return this.first;
    };

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newnode;
        };
        this.length++;
        return this;
    };
    dequeue() {
        if (!this.first) {
            return null;
        };
        if (this.first === this.last) {
            this.last = null;
        };
        this.first = this.first.next;
        this.length--;
        return this;
    };
};

const myQueue = new Queue();

myQueue.peek();
myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");
myQueue.dequeue();

//Implement a Queue using a Stack