/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let ans = Array.from({ length: nums.length });
    let R = 1;
    ans[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] = ans[i] * R;
        R *= nums[i];
    }
    return ans;
};

// Time Complexity: O(n);
// Space Complexity: O(1);
