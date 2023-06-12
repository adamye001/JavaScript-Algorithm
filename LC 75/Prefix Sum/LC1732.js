/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let height = [0];
    for (let i = 0; i < gain.length; i++) {
        height.push(height[i] + gain[i]);
    }
    return Math.max(...height);
};

// Time Complexity: O(n)
// Space Complexity: O(n)
