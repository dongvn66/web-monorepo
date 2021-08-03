"use strict";
/**
 *  dedupe array by key
 * @param array
 * @param uniqueKey
 * @returns
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dedupeArray = void 0;
function dedupeArray(array, uniqueKey) {
    const arr = array.slice();
    const len = arr.length;
    let i = -1;
    while (i++ < len) {
        var j = i + 1;
        for (; j < arr.length; ++j) {
            if (uniqueKey ? arr[i][uniqueKey] === arr[j][uniqueKey] : arr[i] === arr[j]) {
                arr.splice(j--, 1);
            }
        }
    }
    return arr;
}
exports.dedupeArray = dedupeArray;
//# sourceMappingURL=array-fn.js.map