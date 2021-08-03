/**
 *  dedupe array by key
 * @param array
 * @param uniqueKey
 * @returns
 */

export function dedupeArray<T>(array: readonly T[], uniqueKey?: keyof T): T[] {
  const arr = array.slice();

  const len = arr.length;
  let i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (
        uniqueKey ? arr[i][uniqueKey] === arr[j][uniqueKey] : arr[i] === arr[j]
      ) {
        arr.splice(j--, 1);
      }
    }
  }

  return arr;
}
