const reverseString = (string) => {
    if (string) {
        let reversed = "";
        const letters = [...string];
        const len = letters.length - 1;

        for (let i = len; i >= 0; i--) {
            reversed = reversed.concat(letters[i]);
        }

        return reversed;
    }
    return string;
};
console.log();
console.log(reverseString("Hello"));
console.log(reverseString("Good Morning"));
