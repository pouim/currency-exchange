import { isEmpty, isDesktop } from "./index";

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

describe("isDesktop", () => {
  it("returns true for desktop devices", () => {
    Object.defineProperty(window, "innerWidth", { value: 769 });
    expect(isDesktop()).toBe(true);
  });

  it("returns false for mobile devices", () => {
    Object.defineProperty(window, "innerWidth", { value: 767 });
    expect(isDesktop()).toBe(false);
  });
});
