class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    get() {
        return this.collection;
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return (this.collection.length === 0);
    }

    front() {
        return this.collection[0];
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;

            for (let i = 0; i < this.collection.length; i++) {
                if (element.priority < this.collection[i].priority) {
                    this.collection.splice(i, 0, element);

                    added = true;

                    break;
                }
            }

            if (!added) {
                this.collection.push(element);
            }
        }
    }

    dequeue() {
        return this.collection.shift();
    }
}

// Tests
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue({value: 'Banana', priority: 2});
priorityQueue.enqueue({value: 'Apple', priority: 3});
priorityQueue.enqueue({value: 'Cherry', priority: 1});
priorityQueue.enqueue({value: 'Grape', priority: 2});

console.assert(priorityQueue.size() === 4);

console.assert(priorityQueue.dequeue().value === 'Cherry');

console.assert(priorityQueue.size() === 3);

console.assert(priorityQueue.front().value === 'Banana');

console.assert(priorityQueue.get()[2].value === 'Apple');