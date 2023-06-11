/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    function sum(n) {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
            sum += nums[i];
        }
        return sum;
    }
    let sumTotal = sum(nums.length - 1);
    for (let i = 0; i < nums.length; i++) {
        let sumleft = sum(i - 1);
        if (sumTotal == 2 * sumleft + nums[i]) {
            return i;
        }
    }
    return -1;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)
