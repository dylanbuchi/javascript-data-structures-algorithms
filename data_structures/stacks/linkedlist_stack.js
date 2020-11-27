class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    peek() {
        return this.top.value;
    }

    push(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.top = node;
        this.size++;
        return this;
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }
        let temp = this.top;
        const deleted = temp.data;

        this.top = this.top.next;
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
        let curr = this.top;
        let string = "";
        while (curr) {
            string += curr.value + " ";
            curr = curr.next;
        }
        return string;
    }
}

const stack = new Stack();

console.log(stack.push("1"));
console.log(stack.push("2"));
console.log(stack.push("3"));

console.log(stack.pop());

console.log(stack.print());
console.log(stack.length());
