/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = Number.MAX_VALUE, middle = Number.MAX_VALUE;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= small) {
            small = nums[i];
        } else if (nums[i] <= middle) {
            middle = nums[i];
        } else {
            return true;
        }
    }
    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
