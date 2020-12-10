class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const traverseInOrder = (root, list) => {
    if (root.left) {
        traverseInOrder(root.left, list);
    }
    list.push(root.value);

    if (root.right) {
        traverseInOrder(root.right, list);
    }
    return list;
};
const traversePreOrder = (root, list) => {
    list.push(root.value);

    if (root.left) {
        traversePreOrder(root.left, list);
    }

    if (root.right) {
        traversePreOrder(root.right, list);
    }
    return list;
};

const traversePostOrder = (root, list) => {
    if (root.left) {
        traversePostOrder(root.left, list);
    }

    if (root.right) {
        traversePostOrder(root.right, list);
    }

    list.push(root.value);

    return list;
};

const dfsInOrder = (root) => {
    return traverseInOrder(root, []);
};
const dfsPreOrder = (root) => {
    return traversePreOrder(root, []);
};
const dfsPostOrder = (root) => {
    return traversePostOrder(root, []);
};
