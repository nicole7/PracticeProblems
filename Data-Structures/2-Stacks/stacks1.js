//Push adds elements to the top of the array, while Pop removes them from the same location. In other words, Stacks follow the “Last In, First Out” protocol (LIFO)

class Stack {
    constuctor(...items) {
        this.reverse = false;
        this.stack = [...items];
    };

    push(...push) {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
    };

    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    };
};