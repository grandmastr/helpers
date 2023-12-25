type D = 'String' | 'Number' | 'Array' | 'Object' | 'null' | 'undefined';

/**
 * Determines the kind of data passed as a parameter.
 *
 * @param {any} data - The data to be analyzed.
 * @return {D} The kind of data.
 */

const kindOf = (data: any): D => {
  return data === null
    ? 'null'
    : data === undefined
    ? 'undefined'
    : data.constructor.name;
};

export default kindOf;
