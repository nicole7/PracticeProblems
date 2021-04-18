//JavaScript is an event-driven programming language which makes it possible to support 
//non - blocking operations.Internally, the browser manages only one thread to run the entire 
//JavaScript code, using the event queue to enqueue listeners and the event loop to listen for 
//the registered events.To support asynchronicity in a single - threaded environment(to save CPU 
//resources and enhance the web experience), listener functions dequeue and execute only when the 
//call stack is empty.Promises depend on this event - driven architecture to allow a “synchronous - style” 
//execution of asynchronous code that does not block other operations.

//Programmatically, Queues are just arrays with two primary operations: unshift and pop. Unshift enqueues 
//items to the end of the array, while Pop dequeues them from the beginning of the array.In other words, 
//Queues follow the “First In, First Out” protocol(FIFO).If the direction is reversed, we can replace unshift 
//and pop with push and shift, respectively.

class Queue {
    constructor(...items) {
        this.reverse = false;
        this.queue = [...items];
    };

    enqueue(...items) {
        return this.reverse ? this.queue.push(...items) : this.queue.unshift(...items);
    };

    dequeue() {
        return this.reverse ? this.queue.shift() : this.queue.pop();
    };
};
