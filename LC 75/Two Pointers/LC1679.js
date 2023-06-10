/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0,
        i = 0,
        j = nums.length - 1;
    while (i < j) {
        if (k == nums[i] + nums[j]) {
            count++;
            j--;
            i++;
        } else if (k < nums[i] + nums[j]) {
            j--;
        } else {
            i++;
        }
    }
    return count;
};

// Time Complexity: O(n);
// Space Complexity: O(1);
