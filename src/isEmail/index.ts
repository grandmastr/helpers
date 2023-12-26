/**
 * Checks if the given string is a valid email address.
 *
 * @param email - The string to be checked.
 * @returns `true` if the string is a valid email address, `false` otherwise.
 */

const isEmail = (email: string): boolean =>
  /[a-z\d._%+-]+@[a-z\d.-]+\.[a-z]{2,3}/g.test(email);

export default isEmail;
