class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    length() {
        return this.size;
    }
    remove(index) {
        if (index < 0 || index >= this.length()) {
            throw new Error("Error, can't delete");
        } else if (index === 0 && this.length() === 1) {
            this.head = this.tail = null;
        } else if (index === 0) {
            let temp = this.head.next;
            this.head = this.head.next;
            this.head.prev = null;
            temp = null;
        } else if (index === this.length() - 1) {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let count = 0;
            let curr = this.head;

            while (count != index) {
                curr = curr.next;
                count++;
            }

            curr.next.prev = curr.prev;
            curr.prev.next = curr.next;
            curr = null;
        }

        this.size--;
    }

    insert(index, value) {
        if (index === 0) {
            return this.prepend(value);
        } else if (index < 0 || index >= this.length()) {
            throw new Error("Error, can't add");
        } else {
            const node = new Node(value);
            let count = 0;
            let curr = this.head;

            while (count != index) {
                curr = curr.next;
                count++;
            }

            node.next = curr;
            node.prev = curr.prev;

            curr.prev.next = node;
            curr.prev = node;

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
            node.prev = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.tail = this.head = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        let curr = this.head;
        let string = "";

        while (curr) {
            string += !curr.next ? `(${curr.value})` : `(${curr.value}) <=> `;
            curr = curr.next;
        }
        return string;
    }
}

const l = new DoublyLinkedList();

l.append(0);
l.append(1);

l.prepend(23);
l.prepend(24);

l.insert(2, "q");
l.insert(4, "z");

console.log(l.print());
l.remove(0);
l.remove(4);
l.remove(2);
console.log(l.print());

console.log(l.length());
