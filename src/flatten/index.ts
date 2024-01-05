const flatten = (value: unknown) => {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return flattenArray(value);
  }

  return flattenObject(value);
};

const flattenArray = (value: any[]): any[] => {
  return value.reduce((acc, curr) => acc.concat(flatten(curr)), []);
};

const flattenObject = (object: Object) => {
  const flattenedObject = {};

  for (const [key, value] of Object.entries(object) as string[][]) {
    const isObject = typeof value === 'object' && value !== null && !Array.isArray(value);

    if (isObject) {
      Object.assign(flattenedObject, flatten(value));
    } else {
      // @ts-ignore
      flattenedObject[key] = flatten(value);
    }
  }

  return flattenedObject;
};


export default flatten;
