/**
 * Returns an array of month names.
 *
 * @param length - The length of the month names to return. Defaults to 'short'.
 * @returns An array of month names.
 */

const months = (length: string = 'short'): string[] =>
  length === 'short'
    ? [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    : [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

export default months;
