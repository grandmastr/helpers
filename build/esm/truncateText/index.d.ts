/**
 * Truncates a given text to a specified length, adding ellipsis if necessary.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} length - The maximum length of the truncated text. Default value is 30.
 * @return {string} The truncated text.
 */
declare const truncateText: (text: string, length?: number) => string;
export default truncateText;
