/**
 * Creates a deep copy of an object.
 * @param obj - The object to be deep copied.
 * @returns A deep copy of the object.
 */

const deepCopy = (obj: unknown) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copy: unknown = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    // just to check if the property is not inherited
    if (obj.hasOwnProperty(key)) {
      // @ts-ignore
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
};

export default deepCopy;
