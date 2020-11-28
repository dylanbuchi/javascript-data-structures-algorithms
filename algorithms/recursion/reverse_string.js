function reverseStringRecursive(str) {
    if (!str.length) {
        return "";
    }
    return reverseStringRecursive(str.substr(1)) + str[0];
}

console.log(reverseStringRecursive("hello"));
