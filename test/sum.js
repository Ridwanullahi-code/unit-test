export const stringLength = (string) => {
    const len = string.length;
    if (len < 1) {
        throw new Error ("String length must greater than or equal to 1")
    }
    else if (len > 10) {
        throw new Error ("String length must not greater than 10")
    }
    return len
};

// task 2
export const reverseString = (string) => {
  const reverse = string.split("").reverse().join("");
  return reverse;
};
// Task 3
export default class Calculator{
    add(a, b) {
        return a + b;
    }
    subs(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
}

export const capiltalize = (string) => {
    const newString = string.split(',');
    const titleCase = newString.map(str =>
    str[0].toUpperCase() + str.substring(1).toLowerCase()).join(" ")
    return titleCase
}