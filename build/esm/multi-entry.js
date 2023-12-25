// @ts-ignore
var index$3 = (function (length) {
    if (length === void 0) { length = 2; }
    return Array.from({ length: length });
});

/**
 * Extracts the first URL link found in the given text.
 *
 * @param {string} text - The text to search for URL links.
 * @return {string} The first URL link found in the text, or an empty string if no link is found.
 */
var index$2 = function (text) {
    var _a, _b;
    var regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    if (text && ((_a = text.match(regex)) === null || _a === void 0 ? void 0 : _a.length)) {
        return (_b = text.match(regex)) === null || _b === void 0 ? void 0 : _b[0];
    }
    else {
        return '';
    }
};

//given a string, get the media extension of the string and return that
var index$1 = function (uri) {
    var pattern = /\.(mp4|mov|bmp|gif|jpg|jpeg|png)\b/g;
    var match = pattern.exec(uri);
    return (match ? match[0] : '');
};

/**
 * Determines the kind of data passed as a parameter.
 *
 * @param {any} data - The data to be analyzed.
 * @return {D} The kind of data.
 */
var kindOf = function (data) {
    return data === null
        ? 'null'
        : data === undefined
            ? 'undefined'
            : data.constructor.name;
};

/**
 * Checks if the given object is empty.
 *
 * @param {object} data - The object to check.
 * @return {boolean} - True if the object is empty, false otherwise.
 */
var index = function (data) {
    return Object.values(data).length === 0;
};

var media_types = {
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.bmp': 'image/bmp',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
};

/**
 * Truncates a given text to a specified length, adding ellipsis if necessary.
 *
 * @param {string} text - The text to be truncated.
 * @param {number} length - The maximum length of the truncated text. Default value is 30.
 * @return {string} The truncated text.
 */
var truncateText = function (text, length) {
    if (length === void 0) { length = 30; }
    // @ts-ignore
    return text.length > length ? "".concat(text.substring(0, length), "...") : text;
};

export { index$3 as emptyList, index$2 as extractLink, index$1 as getExtension, kindOf as isKindOf, index as isObjectEmpty, media_types as mimeTypes, truncateText };
