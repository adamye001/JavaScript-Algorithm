/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
};

// Time Complexity: O(n)
// Space Complexity: O(n)
