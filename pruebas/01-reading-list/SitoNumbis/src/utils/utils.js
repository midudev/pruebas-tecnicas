import config from "../config";

/**
 *
 * @param {Map<String, String>} readingList
 */
export const saveReadingListToLocal = (readingList) => {
  const obj = Object.fromEntries(readingList);
  const stringify = JSON.stringify(Object.keys(obj));
  localStorage.setItem(config.readingList, stringify);
};
