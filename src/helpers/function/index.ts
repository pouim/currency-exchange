/**
 * @description To check if a value is empty.
 * @function isEmpty
 * @param { any } value // Generic type
 * @returns { boolean }
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * @description to check all values of an object are truthy.
 * const obj = {
  a: 1,
  b: 'hello',
  c: true
};
console.log(allValuesTruthy(obj)); // Output: true
 * @function isAllValuesTruthy
 * @param { Record<string, unknown> | undefined } object 
 * @returns { boolean }
 */
export function isAllValuesTruthy(object: Record<string, unknown> | undefined) {
  if(typeof object == 'undefined') {
    return false;
  }

  for (const value of Object.values(object)) {
    if (!value) {
      return false;
    }
  }
  return true;
}

/**
 * @description to capitalize first letter of given string
 * and replace '_' with space.
 * @function capitalize
 * @param { string } string
 * @returns { string }
 */
export function capitalize(string: string): string {
  // Replace _ with spaces
  string = string.replace(/_/g, " ");

  // Capitalize the first letter of the text
  return string.charAt(0).toUpperCase() + string.slice(1);
}


/**
 * @function getLaterDate
 * @param { number } days 
 * @returns { string }
 */
export function getLaterDate(days: number) {
  const today = new Date();
  const laterDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);

  return laterDate.toISOString().split("T")[0];
}
