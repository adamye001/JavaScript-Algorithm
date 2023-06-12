/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let map = new Map();
    arr.forEach((element) => {
        if (map.get(element)) {
            let num = map.get(element);
            num++;
            map.set(element, num);
        } else {
            map.set(element, 1);
        }
    });
    return new Set(map.values()).size === map.size;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
