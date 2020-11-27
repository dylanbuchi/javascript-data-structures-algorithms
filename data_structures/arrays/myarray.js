class MyArray {
    constructor() {
        this.array = {};
        this.size = 0;
    }

    // return an item of the array by index
    get(index) {
        if (this.isFalsy(index)) {
            return "Error can't get item";
        }
        return this.array[index];
    }

    // add an item at the end of the array
    push(item) {
        this.array[this.size++] = item;
    }

    // remove the last item of the array
    pop() {
        if (this.isEmpty()) {
            return "Error, can't delete";
        }
        const deleted = this.array[--this.size];
        delete this.array[this.size];
        return deleted;
    }

    // prints every items of the array
    print() {
        if (this.isEmpty()) {
            return "[]";
        }
        let string = "[ ";
        for (let p in this.array) {
            string += this.array[p] + ", ";
        }

        const indexLastComma = string.indexOf(",", string.length - 2);
        string = string.substring(0, indexLastComma);
        return (string += " ]");
    }
    // check if the array is empty
    isEmpty() {
        return this.size === 0;
    }

    // check if the argument is falsy
    isFalsy(arg) {
        return (
            this.isEmpty() ||
            arg === undefined ||
            arg === null ||
            arg === "" ||
            arg < 0 ||
            arg >= this.size
        );
    }

    // remove an item from the array by index
    remove(index) {
        if (this.isFalsy(index)) {
            return "Error, can't delete";
        }

        const deleted = this.array[index];

        for (let i = index; i < this.size - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        delete this.array[this.size - 1];
        this.size--;
        return deleted;
    }

    // return the length of the array
    length() {
        return this.size;
    }

    // add an item to the front of the array
    unshift(item) {
        if (this.isEmpty()) {
            this.push(item);
            return;
        }

        this.size++;
        for (let i = this.size - 1; i >= 0; i--) {
            this.array[i] = this.array[i - 1];
        }
        this.array[0] = item;
    }

    // remove an item from the front of the array
    shift() {
        if (this.isEmpty()) {
            return "Can't delete";
        }
        const deleted = this.array[0];
        delete this.array[0];
        for (let i = 0; i < this.size; i++) {
            this.array[i] = this.array[i + 1];
            console.log(this.array[i]);
        }
        delete this.array[this.size - 1];
        this.size--;
        return deleted;
    }
}

// main
const main = () => {
    const array = new MyArray();

    console.log(array.length());
    console.log(array.print());

    array.push(1);
    array.unshift("two");

    array.push(3);
    array.unshift("four");

    console.log(array.print());
    console.log(array.get(0));

    console.log(array.pop());
    console.log(array.print());

    console.log(array.shift());
    console.log(array.print());

    console.log(array.remove(1));
    console.log(array.remove(0));

    console.log(array.print());
    console.log(array.length());
};

main();
