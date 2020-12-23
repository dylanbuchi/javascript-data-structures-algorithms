const { Node } = require("../linkedlists/linkedlist.js");

class Stack {
    constructor() {
        this.top = null;
        this._size = 0;
    }

    push(value) {
        const node = new Node(value);

        if (!this.size) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this._size++;
    }

    get size() {
        return this._size;
    }

    print() {
        let curr = this.top;
        const result = [];
        while (curr) {
            result.push(curr.value);
            curr = curr.next;
        }
        return result.join(" -> ");
    }
    pop() {
        if (!this.isEmpty()) {
            this.top = this.top.next;
            this._size--;
        }
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (this.top) {
            return this.top.value;
        }
    }
}

// -------------------------------

const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.peek());
console.log(stack.print());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.print());

console.log(stack.size);
