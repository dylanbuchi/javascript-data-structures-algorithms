const {
    Node,
    LinkedList,
} = require("../../data_structures/linkedlists/linkedlist.js");

class RecursiveLinkedList extends LinkedList {
    constructor() {
        super();
    }

    append(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            const curr = this.head;
            this._appendRecursive(value, curr);
        }
        this.size++;
    }

    _appendRecursive(value, node) {
        if (!node.next) {
            node.next = new Node(value);
            return;
        }
        this._appendRecursive(value, node.next);
    }

    print() {
        const curr = this.head;
        return this._printRecursive(curr, []);
    }

    _printRecursive(node, list) {
        if (!node) {
            return list.join(" -> ");
        }
        list.push(node.value);
        return this._printRecursive(node.next, list);
    }

    includes(value) {
        const curr = this.head;
        return this._includesRecursive(curr, value);
    }

    _includesRecursive(node, value) {
        if (!node) {
            return false;
        }
        if (node.value === value) {
            return true;
        }
        return this._includesRecursive(node.next, value);
    }
}

const list = new RecursiveLinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.includes(0));
console.log(list.includes(1));
console.log(list.print());

const sumNodes = (head) => {
    return sumNodesRecursive(head, 0);
};

const sumNodesRecursive = (node, total) => {
    if (!node) {
        return total;
    }
    total += node.value;
    return sumNodesRecursive(node.next, total);
};

console.log("Sum of Nodes values:", sumNodes(list.head));
