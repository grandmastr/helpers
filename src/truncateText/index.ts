/**
 * Truncates a given text to a specified length, adding ellipsis if necessary.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} limit - The maximum length of the truncated text. Default value is 30.
 * @param {number} max - The maximum length of the truncated text. Default value is 30.
 * @return {string} The truncated text.
 */
const truncateText = (text: string, limit: number = 12, max: number = 18): string => {
  if (text.length <= max) {
    return text;
  }

  const first_string = text.substring(0, limit);
  const second_string = text.substring(text.length - 3, text.length + 1);

  return `${first_string}...${second_string}`;
};
export default truncateText;
