class Queue {
    constructor() {
        this.queue = [];
        this.start = 0;
        this.end = -1;
        this.size = 0;
    }

    peek() {
        return this.queue[this.start];
    }

    enqueue(value) {
        this.queue[++this.end] = value;
        this.size++;
        return this;
    }

    dequeue() {
        if (this.isEmpty()) {
            return;
        }
        const deleted = this.queue[this.start++];
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
        let string = "";
        for (let i = this.start; i < this.end + 1; i++) {
            const element = this.queue[i];
            string += element;
        }

        return string.split("").reverse().join(", ") || [];
    }
}

const queue = new Queue();

console.log(queue.enqueue("1"));
console.log(queue.enqueue("2"));
console.log(queue.enqueue("3"));

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());

console.log(queue.print());
console.log(queue.length());
