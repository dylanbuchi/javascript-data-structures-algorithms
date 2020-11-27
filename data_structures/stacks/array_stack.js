class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
        this.size = 0;
    }
    peek() {
        return this.stack[this.top];
    }

    push(value) {
        this.stack[++this.top] = value;
        this.size++;
        return this;
    }

    pop() {
        if (this.isEmpty()) {
            return;
        }

        const deleted = this.stack[this.top--];
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
        for (let i = 0; i < this.size; i++) {
            const element = this.stack[i];
            string += element;
        }

        return string.split("").join(", ") || [];
    }
}
const stack = new Stack();

console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.print());

console.log(stack.length());
