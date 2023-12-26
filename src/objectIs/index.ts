/**
 * @description Polyfill for Object.is
 * */
if (!Object.is) {
  Object.is = (x: any, y: any): boolean => {
    if (x === y) {
      // handles data types that are not objects or functions
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // handles data types that are objects or functions
      return x !== x && y !== y;
    }
  };
}

/**
 * @param val - The value to check.
 * @returns `true` if the value is neither null nor undefined, `false` otherwise.
 * @description Used to check if a value is neither null nor undefined using type coercion.
 */
const isNotNull = (val: any): boolean => {
  return !!val;
};

/**
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns `true` if `a` and `b` are equal, `false` otherwise.
 * @description Used to check for equality of `a` and `b`.
 */
const isEqual = (a: string | number | boolean | Object, b: string | number | boolean | Object): boolean => {
  if (isNotNull(a) && isNotNull(b)) {
    return Object.is(a, b);
  }
  return false;
};

export default isEqual;
