class CustomMap {
    constructor() {
        this.collection = {};
        this.count = 0;
    }

    set(key, value) {
        this.collection[key] = value;
        this.count++;
    }

    size() {
        return this.count;
    }

    get(key) {
        return (key in this.collection) ? this.collection[key] : null;
    }

    values() {
        let result = [];

        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        }

        return (result.length > 0) ? result : null;
    }

    clear() {
        this.collection = {};
        this.count = 0;
    }

    has(key) {
        return (key in this.collection);
    }

    delete(key) {
        if (key in this.collection) {

            delete this.collection[key];

            this.count--;
        }
    }
}

// Tests
const customMap = new CustomMap();

customMap.set('three', 3);
customMap.set('"Five"', 5);
customMap.set('o n e', 1);
customMap.set('s-e-v-e-n', 7);

console.assert(customMap.get('"Five"') === 5);

console.assert(customMap.size() === 4);

console.assert(customMap.values()[2] === 1);
