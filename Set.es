class CustomSet {
    constructor() {
        this.collection = [];
    }

    size() {
        return this.collection.length;
    }

    has(element) {
        return (this.collection.indexOf(element) !== -1);
    }

    values() {
        return this.collection;
    }

    add(element) {
        if (this.has(element)) {
            return false;
        } else {
            this.collection.push(element);

            return true;
        }
    }

    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element);

            this.collection.splice(index, 1);

            return true;
        } else {
            return false;
        }
    }

    intersection(otherSet) {
        const intersectionSet = new customSet();
        const firstSet = this.values();

        firstSet.forEach(element => {
            if (otherSet.has(element)) {
                intersectionSet.add(element);
            }
        });

        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new customSet();
        const firstSet = this.values();

        firstSet.forEach(element => {
            if (!otherSet.has(element)) {
                differenceSet.add(element);
            }
        });

        return differenceSet;
    }

    union(otherSet) {
        const unionSet = new customSet();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach(element => unionSet.add(element));
        secondSet.forEach(element => unionSet.add(element));

        return unionSet;
    }

    subset(otherSet) {
        const firstSet = this.values();

        return firstSet.every(value => otherSet.has(value));
    }
}

//Tests
const firstSet = new CustomSet();
const secondSet = new CustomSet();

firstSet.add('One');
firstSet.add('One');

console.assert(firstSet.values().length === 1);

console.assert(firstSet.values()[0] === 'One');

secondSet.add('Two');
secondSet.add('Three');
secondSet.add('One');
secondSet.add('Four');

console.assert(firstSet.subset(secondSet) === true);

console.assert(firstSet.intersection(secondSet).values()[0] === 'One');

console.assert(secondSet.difference(firstSet).values().length === 3);
