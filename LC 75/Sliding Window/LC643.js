/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let max = 0,
        sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum;
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
