/**
 * Debounce a function, preventing it from being called multiple times within a specified timeout period.
 *
 * @param {Function} func - The function to index.
 * @param {number} timeout - The timeout period in milliseconds.
 * @return {void}
 */
const index = (func: Function, timeout: number): (...args: any[]) => void => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return (...args: any[]): void => {
        clearTimeout(timer!);
        timer = setTimeout(() => func(...args), timeout);
    };
};

export default index;
