class Queue {
    constructor() {
        this.collection = [];
    }

    get() {
        return this.collection;
    }

    front() {
        return this.collection[0];
    }

    isEmpty() {
        return (this.collection.length === 0);
    }

    size() {
        return this.collection.length;
    }

    enqueue(element) {
        this.collection.push(element);
    }

    dequeue() {
        return this.collection.shift();
    }
}

// Tests
const queue = new Queue();

queue.enqueue('hey');
queue.enqueue('ho');
queue.enqueue('hi');

console.assert(queue.size() === 3);
console.assert(queue.front() === 'hey');

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.assert(queue.isEmpty() === true);
