class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let temp = this.root;
            while (true) {
                if (node.value > temp.value) {
                    if (!temp.right) {
                        temp.right = node;
                        return;
                    }
                    temp = temp.right;
                } else {
                    if (!temp.left) {
                        temp.left = node;
                        return;
                    }
                    temp = temp.left;
                }
            }
        }
    }

    search(value) {
        let temp = this.root;
        while (true) {
            if (!temp) {
                return false;
            } else if (temp.value === value) {
                return true;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                temp = temp.left;
            }
        }
        return false;
    }
}

const tree = new BinaryTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.search(101));
console.log(tree.search(4));
console.log(tree.search(1));

const traverse = (node) => {
    const tree = {};
    tree.value = node.value;
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
};

console.log(traverse(tree.root));
