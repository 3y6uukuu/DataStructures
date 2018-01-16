class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }

    size() {
        return this.count;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return;
        }

        this.count--;

        const result = this.storage[this.count];

        delete this.storage[this.count];

        return result;
    }

    peek(value) {
        return this.storage[this.count - 1];
    }
}

// Tests
const stack = new Stack();

stack.push(1987);
stack.push(1989);

console.assert(stack.peek() === 1989);

stack.push(2004);

console.assert(stack.size() === 3);

stack.pop();
stack.pop();

console.assert(stack.peek() === 1987);