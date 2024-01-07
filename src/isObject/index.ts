/**
 * @param value - The value to check.
 * @returns `true` if the value is an object, `false` otherwise.
 * @description Used to check if a value is an object.
 **/

const isObject = (value: unknown): boolean => {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export default isObject;
