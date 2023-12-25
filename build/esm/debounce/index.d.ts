/**
 * Debounce a function, preventing it from being called multiple times within a specified timeout period.
 *
 * @param {Function} func - The function to index.
 * @param {number} timeout - The timeout period in milliseconds.
 * @return {void}
 */
declare const index: (func: Function, timeout: number) => (...args: any[]) => void;
export default index;
