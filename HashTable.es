class HashTable {
    constructor(storageLimit = 14) {
        this.storage = [];
        this.storageLimit = storageLimit;
    }

    hash(string, max) {
        let hash = 0;

        for (let i = 0; i < string.length; i++) {
            hash += string.charCodeAt(i);
        }

        return hash % max;
    }

    get() {
        return this.storage;
    }

    add(key, value) {
        const index = this.hash(key, this.storageLimit);

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;

            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    }

    remove(key) {
        const index = this.hash(key, this.storageLimit);

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }

    lookup(key) {
        const index = this.hash(key, this.storageLimit);

        if (this.storage[index] !== undefined) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }
}

// Tests
const hashTable = new HashTable();

hashTable.add('zero', 0);
hashTable.add('six', '6');
hashTable.add('eight', 8);
hashTable.add('eleven', 11);

console.assert(hashTable.lookup('zero') === 0);
console.assert(hashTable.lookup('six') === '6');
