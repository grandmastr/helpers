/**
 * Converts big numbers into a shorter format using K for thousands, M for millions, and B for billions.
 *
 * @param {number} value - The number to be converted.
 * @returns {string} The converted string with appropriate suffix.
 */
const abbreviateNumber = (value: number): string => {
  if (typeof value !== 'number') {
    throw new TypeError('Value must be a number');
  }

  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(1).replace(/\.0$/, '')}B`;
  }
  if (value >= 1e6) {
    return `${(value / 1e6).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (value >= 1e3) {
    return `${(value / 1e3).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return value.toString();
};

export default abbreviateNumber;
