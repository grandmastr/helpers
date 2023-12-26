/**
 * Asynchronously waits for a specified time before calling the provided callback function.
 *
 * @param callback - The callback function to be called after the specified time.
 * @param time - The time to wait in milliseconds. Defaults to 1000 milliseconds (1 second).
 * @returns A Promise that resolves after the specified time.
 */
const wait = async (callback: Function, time: number = 1000): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, time));
    await callback();
  } catch (e) {
    // @ts-ignore
    throw new Error(e);
  }
};

export default wait;
