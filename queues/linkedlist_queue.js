class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.start = null;
        this.end = null;
        this.size = 0;
    }

    peek() {
        return this.start.value;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.isEmpty()) {
            this.start = this.end = node;
        } else {
            this.end.next = node;
            this.end = node;
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        let temp = this.start;
        const deleted = this.start.value;

        this.start = this.start.next;
        temp = null;
        this.size--;
        return deleted;
    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }

    print() {
        let curr = this.start;
        let string = "";
        while (curr) {
            string += curr.value + " ";
            curr = curr.next;
        }
        return string;
    }
}

const queue = new Queue();

console.log(queue.enqueue("1"));
console.log(queue.enqueue("2"));
console.log(queue.enqueue("3"));

console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.print());
console.log(queue.length());
