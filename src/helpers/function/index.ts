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
