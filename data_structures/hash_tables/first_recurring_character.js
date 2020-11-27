// Google Question

const firstRecurringCharacter = (input) => {
    const seen = {};
    for (const n of input) {
        if (seen[n]) {
            return n;
        } else {
            seen[n] = true;
        }
    }
    return undefined;
};

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

console.log(firstRecurringCharacter([2, 3, 4, 5]));
// Given an array = [2,3,4,5]:
// It should return undefined

console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
