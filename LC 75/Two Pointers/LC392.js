/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = 0;
    for (let j = 0; j < t.length; j += 1) {
        if (t[j] === s[i]) {
            i++;
        }
    }
    if (i === s.length) {
        return true;
    } else {
        return false;
    }
};

// Time Complexity: O(n);
// Space Complexity: O(1);
