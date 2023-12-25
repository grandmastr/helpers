/**
 * Checks if the given object is empty.
 *
 * @param {object} data - The object to check.
 * @return {boolean} - True if the object is empty, false otherwise.
 */
const index = (data: object): boolean =>
    Object.values(data).length === 0;

export default index;
