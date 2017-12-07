class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    head() {
        return this.head;
    }

    add(element) {
        const node = new Node(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.length++;
    }

    remove(element) {
        let currentNode = this.head;
        let previousNode;

        if (currentNode.element === element) {
            this.head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.length--;
    }

    addAt(index, element) {
        const node = new Node(element);

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index > this.length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;

                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            node.next = currentNode;
            previousNode.next = node;
        }

        this.length++;
    }

    removeAt(index) {
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        this.length--;

        return currentNode.element;
    }

    elementAt(index) {
        let currentNode = this.head;
        let count = 0;

        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }

    indexOf(element) {
        let currentNode = this.head;
        let index = -1;

        while (currentNode) {
            index++;

            if (currentNode.element === element) {
                return index;
            }

            currentNode = currentNode.next;
        }

        return -1;
    }
}


// Tests
const linkedList = new LinkedList();
console.assert(linkedList.isEmpty() === true);

linkedList.add('One');
console.assert(linkedList.indexOf('One') === 0);

linkedList.add('Two');
console.assert(linkedList.isEmpty() === false);

linkedList.remove('Two');
console.assert(linkedList.size() === 1);

linkedList.add('NewTwo');
console.assert(linkedList.elementAt(1) === 'NewTwo');

linkedList.addAt(0, 'NewOne');
linkedList.addAt(2, 'Three');
console.assert(linkedList.size() === 4);

console.assert(linkedList.removeAt(1) === 'One');
console.assert(linkedList.removeAt(1) === 'Three');
console.assert(linkedList.removeAt(1) === 'NewTwo');
console.assert(linkedList.removeAt(0) === 'NewOne');

console.assert(linkedList.isEmpty() === true);