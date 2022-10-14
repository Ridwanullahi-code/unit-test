import Calculator from "./sum.js";
import { stringLength as len } from "./sum.js";
import { reverseString as reverse } from "./sum.js";
import {capiltalize} from "./sum.js";

const cal = new Calculator()

test("The string length must be: ", () => {
  expect(len("Helloworld")).toBe(10);
});

test("String length must less than 1", () => {
  expect(len("H")).toBeLessThanOrEqual(1);
})
test("String length must not greater than 10", () => {
  expect(len("Ridwan")).toBeLessThan(10)
})
// task 2 test 
test("String must be the same", () => {
  expect(reverse("Hello")).toBe("olleH");
})

// task 3 testing
describe("Simple calculaor", () => {
  test("Adds 1 + 2 should be 3", () => {
    expect(cal.add(1, 2)).toBe(3)
  });
  test("Multiply 1 with 2 should be 2", () => {
    expect(cal.mul(1, 2)).toBe(2);
  });
  test("substract 3 - 1 should be 2", () => {
    expect(cal.subs(3, 1)).toBe(2);
  });
})

// task 4 testing
test("String must be capitalized", () => {
  expect(capiltalize("hello world")).toBe("Hello world");
});