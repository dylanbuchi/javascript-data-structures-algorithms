class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    length() {
        return this.size;
    }
    remove(index) {
        if (this.isEmpty() || index < 0 || index >= this.length()) {
            throw new Error("Error, can't delete");
        }
        if (this.length() === 1 && index === 0) {
            this.head = this.tail = null;
        } else if (index === 0) {
            const temp = this.head.next;
            this.head.next = null;
            this.head = temp;
        } else {
            let count = index;
            let curr = this.head;

            while (count != 1) {
                curr = curr.next;
                count--;
            }
            if (curr.next === this.tail) {
                this.tail = curr;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }
    insert(index, value) {
        if (index < 0 || index > this.length()) {
            throw new Error("error, can't add");
        } else if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);

            let curr = this.head;
            let count = index;

            while (count != 1) {
                curr = curr.next;
                count--;
            }
            if (curr == this.tail) {
                this.tail = node;
            }
            node.next = curr.next;
            curr.next = node;

            this.size++;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.tail = this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        let curr = this.head;
        let string = "";

        while (curr) {
            string += !curr.next ? `(${curr.value})` : `(${curr.value}) -> `;
            curr = curr.next;
        }
        return string;
    }
}

const l = new LinkedList();

l.insert(0, 11);
l.insert(1, 22);

l.append(3);

l.prepend(-1);

l.remove(3);
l.remove(2);
l.remove(1);
l.remove(0);

// console.log(l.print());
// console.log(l.length());

exports.Node = Node;
exports.LinkedList = LinkedList;
