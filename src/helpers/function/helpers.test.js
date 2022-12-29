import { isEmpty, isAllValuesTruthy, capitalize } from "./index";

test("isEmpty function works correctly", () => {
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty("")).toBe(true);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty(new Set())).toBe(true);
  expect(isEmpty(new Map())).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty("hello")).toBe(false);
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
  expect(
    isEmpty(
      new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ])
    )
  ).toBe(false);
  expect(isEmpty({ a: 1, b: 2, c: 3 })).toBe(false);
});

test("capitalize function works correctly", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("hello_world")).toBe("Hello world");
  expect(capitalize("hello-world")).toBe("Hello-world");
});

test("isAllValuesTruthy", () => {
  expect(isAllValuesTruthy(undefined)).toBe(false);
  expect(isAllValuesTruthy({ a: 1, b: "hello", c: true })).toBe(true);
  expect(isAllValuesTruthy({ a: 1, b: "", c: true })).toBe(false);
  expect(isAllValuesTruthy({ a: 1, b: "hello", c: false })).toBe(false);
  expect(isAllValuesTruthy({ a: 0, b: "hello", c: true })).toBe(false);
});
