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
 * @function isDesktop
 * @returns { boolean }
 */
export function isDesktop() {
  if (typeof window !== "undefined") {
    return window.innerWidth > 768;
  }
  return false;
}
