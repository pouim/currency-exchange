import {
  isEmpty,
  isAllValuesTruthy,
  capitalize,
  formatDate,
  getLaterDate,
  findArrayMinMaxAvg,
} from "./index";

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

describe("formatDate", () => {
  it("should return a string in the format YYYY-MM-DD", () => {
    const date = new Date("2022-12-29T12:00:00Z");
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe("2022-12-29");
  });
});

describe("getLaterDate", () => {
  beforeAll(() => {
    // Mock the Date object
    jest.useFakeTimers().setSystemTime(new Date("2022-12-31"));
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should return the correct date for -30 days later", () => {
    expect(getLaterDate(-30)).toBe("2022-12-01");
  });

  it("should return the correct date for -1 days later", () => {
    expect(getLaterDate(-1)).toBe("2022-12-30");
  });

  it("should return the correct date for 0 days later", () => {
    expect(getLaterDate(0)).toBe("2022-12-31");
  });

  it("should return the correct date for 1 day later", () => {
    expect(getLaterDate(1)).toBe("2023-01-01");
  });

  it("should return the correct date for 7 days later", () => {
    expect(getLaterDate(7)).toBe("2023-01-07");
  });
});

test("findArrayMinMaxAvg function", () => {
  const list = [10, 20, 30];
  expect(findArrayMinMaxAvg(list)).toEqual({ min: 10, max: 30, avg: 20 });

  const list2 = [-10, 0, 10];
  expect(findArrayMinMaxAvg(list2)).toEqual({ min: -10, max: 10, avg: 0 });

  const list3 = [10];
  expect(findArrayMinMaxAvg(list3)).toEqual({ min: 10, max: 10, avg: 10 });
});
