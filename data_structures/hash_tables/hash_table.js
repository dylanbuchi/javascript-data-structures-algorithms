class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        const bucket = this.data[index];

        if (!bucket) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
    }

    get(key) {
        const index = this._hash(key);
        const bucket = this.data[index];

        if (!bucket) return undefined;

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) return bucket[i][1];
        }
    }
    print() {
        return this.data;
    }

    keys() {
        const keys = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[0][i]) {
                keys.push(this.data[0][i][0]);
            }
        }

        return keys;
    }

    values() {
        const values = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[0][i]) {
                values.push(this.data[0][i][1]);
            }
        }

        return values;
    }
    items() {
        const keys = this.keys();
        const values = this.values();
        const items = [];

        for (let i = 0; i < keys.length; i++) {
            items.push([keys[i], values[i]]);
        }
        return items;
    }
}

const myHashTable = new HashTable(10);

myHashTable.set("a", 1);
myHashTable.set("b", 2);
myHashTable.set("c", 3);
myHashTable.set("d", 4);
myHashTable.set("e", 5);

console.log(myHashTable.get("a"));
console.log(myHashTable.get("b"));
console.log(myHashTable.get("c"));
console.log(myHashTable.get("d"));

console.log(myHashTable.keys());
console.log(myHashTable.values());
console.log(myHashTable.items());

console.log(myHashTable.print());
