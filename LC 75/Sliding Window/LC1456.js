/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0,
        l = 0,
        r = 0;
    while (r < k) {
        vowels.has(s[r]) && count++;
        r++;
    }
    let max = count;
    while (r < s.length) {
        vowels.has(s[r]) && count++;
        vowels.has(s[l]) && count--;
        l++;
        r++;
        max = Math.max(max, count);
    }
    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
