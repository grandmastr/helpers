/**
 * Extracts the first URL link found in the given text.
 *
 * @param {string} text - The text to search for URL links.
 * @return {string} The first URL link found in the text, or an empty string if no link is found.
 */
const index = (text: string): string => {
  const regex: RegExp =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;

  // @ts-ignore
  if (text && text.match(regex)?.length) {
    // @ts-ignore
    return text.match(regex)?.[0] as string;
  } else {
    return '';
  }
};

export default index;
