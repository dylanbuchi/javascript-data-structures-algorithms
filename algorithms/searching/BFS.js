class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const breadthFirstSearch = (root) => {
    let currentNode = root;

    let result = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length) {
        currentNode = queue.shift();
        result.push(currentNode.value);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    return result;
};
