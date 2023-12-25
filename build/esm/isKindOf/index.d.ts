type D = 'String' | 'Number' | 'Array' | 'Object' | 'null' | 'undefined';
/**
 * Determines the kind of data passed as a parameter.
 *
 * @param {any} data - The data to be analyzed.
 * @return {D} The kind of data.
 */
declare const kindOf: (data: any) => D;
export default kindOf;
