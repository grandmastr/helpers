/**
 * Returns an array of strings representing the days of the week.
 *
 * @param length - Optional parameter to specify the length of the day names. Default is "short".
 * @returns An array of strings representing the days of the week.
 */

const daysOfTheWeek = (length: string = "short"): string[] =>
  length === "short"
    ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    : [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

export default daysOfTheWeek;
