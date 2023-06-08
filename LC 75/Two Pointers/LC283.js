/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Time Complexity: O(n);
// Space Complexity: O(1);
// var moveZeroes = function (nums) {
//     let len = nums.length;
//     for (let i = 0; i < len; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1);
//             nums.push(0);
//             i--;
//             len--;
//         }
//     }
//     return nums;
// };


// Time Complexity: O(n);
// Space Complexity: O(1);
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};
