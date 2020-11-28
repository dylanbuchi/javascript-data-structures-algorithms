const reverseStringRecursive = (str) => {
    if (!str.length) {
        return "";
    }
    return reverseStringRecursive(str.substr(1)) + str[0];
};

const reverseStringIterative = (str) => {
    const parts = str.split("");
    const array = [];

    for (let i = parts.length - 1; i >= 0; i--) {
        const ch = parts[i];
        array.push(ch);
    }

    return array.join("");
};

const reverseStringOneLine = (str) => {
    return str.split("").reverse().join("");
};

console.log(reverseStringRecursive("hello"));
console.log(reverseStringIterative("hello"));
console.log(reverseStringOneLine("hello"));
