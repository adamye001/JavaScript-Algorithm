/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let l = 0;
    let zeroCount = 0;
    let max = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) zeroCount += 1;
        while (zeroCount > 1) {
            if (nums[l] === 0) zeroCount -= 1;
            l += 1;
        }
        max = Math.max(max, r - l);
    }
    return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
