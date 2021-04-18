//node has two elements: value to the node and a pointer to the next node
//first node is called the head and last one is the tail (or all are tails after head)
//Linked Lists tails are null terminated (nothing coming after it)
//JS does not have linked lists built in - must build it

//Hashes are better than LL is because theres no unshifting when inserting or searching for indexes
//But LL are better with sorting and easier to add


const basket = ['apples', 'grapes'];
//linked list: apples ==> grapes ==> pears
// apples 
// 8947 ==> grapes
//          8742 ==> pears
//                    3782 ==> null  


const obj1 = { a: true };
//created a pointer - a reference to an object - not copying
const obj2 = obj1;
obj1.a = "hello"
//Both objects change because you created a pointer
console.log(obj1); //{ a: "Hello" }
console.log(obj1); //{ a: "Hello" }

//Garbage collection! - JS memory is managed autoatically because it gets GC as nothing is pointing to it. 
//Have to manually delete { a: true }


//10 ---> 5 ---> 16
let myDoublyLinkedList = {
    head: {
        value: 10
            //has to be a pointer
        next: {
            value: 5,
            next: {
                //tail and points to null or null terminated
                value: 16,
                next: null,
            };
        };
    };
};

///////////////////////////

class LinkedList {
    constructor(value) {
        this.head = {
            value = value,
            //when we first create it default at null - constructor is all about creating the first node
            next = null
        };
        this.tail = this.head;
        this.length = 1;
    };
    append(value) {
        //create a new node for the next value
        const newNode = {
            value: value,
            next: null,
        };
        //becuase above, tail is equal to head so its the same obj structure
        //Running this first updates the same space
        this.tail.next = newNode;
        //and now it's properly the tail value
        this.tail = newNode;
        this.length++;
        //'this' is the linked list
        return this;
    };
    prepend(value) {
        const newNode = {
            value: value,
            //not the head
            next: null,
        };
        //create a pointer
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };

    insert(index, value) {
        //check params
        if (index >= this.legnth) {
            return this.append(value);
        };

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        };

        const newNode = {
            value: value,
            next: null,
        };

        //point to the previous node to the one we're inserting
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        prevNode.next = NewNode;
        newNode.next = nextNode;
        this.length++;
        return this.printList;
        
    };

    traverseToIndex(index){
            //check params

            let counter = 0;
            let currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
            };
            return currentNode;
           
    };

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };
        return array;
    };

    remove(index) {
        //check params

        const prevNode = this.traverseToIndex(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.length--;
        return this.printList();
    };

    reverse() {
        //check - what if we only have one item?
        if (!this.head.next) {
            return this.printList();
        };
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        //while second is not null
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        };
        this.head.next = null;
        this.head = first;
        return this.printList();
    }

};

//instantiate a new class
const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();


///////////////////////////////////////////////////////////////

//Dry it up

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};
    
    
class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value = value,
            //when we first create it default at null - constructor is all about creating the first node
            next = null
        };
        this.tail = this.head;
        this.length = 1;
    };
    append(value) {
        //create a new node for the next value
        const newNode = new Node(value);
        //becuase above, tail is equal to head so its the same obj structure
        //Running this first updates the same space
        this.tail.next = newNode;
        //and now it's properly the tail value
        this.tail = newNode;
        this.length++;
        //'this' is the linked list
        return this;
    };
    prepend(value) {
        const newNode = new Node(value);
        //create a pointer
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };
};

//instantiate a new class
const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);


/////////////////////////////


//Doubly-Linked Lists
//similar but links to the node before it - nodes link to each other
//allow us to traverse our links backwards


class DoublyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value = value,
            //when we first create it default at null - constructor is all about creating the first node
            next = null,
            prev = null,
        };
        this.tail = this.head;
        this.length = 1;
    };
    append(value) {
        //create a new node for the next value
        const newNode = {
            value: value,
            next: null,
            prev: null,
        };
        newNode.prev = this.tail;
        //becuase above, tail is equal to head so its the same obj structure
        //Running this first updates the same space
        this.tail.next = newNode;
        //and now it's properly the tail value
        this.tail = newNode;
        this.length++;
        //'this' is the linked list
        return this;
    };
    prepend(value) {
        const newNode = {
            value: value,
            //not the head
            next: null,
            prev: null,
        };
        //create a pointer
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    };

    insert(index, value) {
        //check params
        if (index >= this.legnth) {
            return this.append(value);
        };

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        };

        const newNode = {
            value: value,
            next: null,
        };

        //point to the previous node to the one we're inserting
        const prevNode = this.traverseToIndex(index - 1);
        const nextNode = prevNode.next;
        //make them all point to each other
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return this.printList;
        
    };

    traverseToIndex(index){
            //check params

            let counter = 0;
            let currentNode = this.head;
            while (counter !== index) {
                currentNode = currentNode.next;
            };
            return currentNode;
           
    };

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        };
        return array;
    };

    remove(index) {
        //check params

        const prevNode = this.traverseToIndex(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = nodeToRemove.next;
        this.length--;
        return this.printList();
    };
};

//instantiate a new class
const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.printList();
myDoublyLinkedList.remove(2);


//Single LL Pro: Less memory and faster Con: Cannot be travered in reverse - fast insertion and deletion with not much searching

//Double LL Pro: Can be iterated forward and back and  deletion is easier Con: Complex and requires more memory and storage - dont 
//have limits on memory and goo searching opps back and forth




