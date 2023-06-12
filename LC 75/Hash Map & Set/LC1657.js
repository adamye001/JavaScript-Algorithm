/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    let dp1 = {};
    let dp2 = {};
    for (let i = 0; i < word1.length; i++) {
        if (!dp1[word1[i]]) {
            dp1[word1[i]] = 1;
        }
        dp1[word1[i]] += 1;
        if (!dp2[word2[i]]) {
            dp2[word2[i]] = 1;
        }
        dp2[word2[i]] += 1;
    }
    if (Object.keys(dp1).sort().join("") !== Object.keys(dp2).sort().join("")) {
        return false;
    }
    if (
        Object.values(dp1).sort().join("") !==
        Object.values(dp2).sort().join("")
    ) {
        return false;
    }
    return true;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
