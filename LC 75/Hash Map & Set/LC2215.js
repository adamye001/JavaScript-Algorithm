/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    let answer1 = [];
    let answer2 = [];
    set1.forEach((num) => {
        if (!set2.has(num)) {
            answer1.push(num);
        }
    });
    set2.forEach((num) => {
        if (!set1.has(num)) {
            answer2.push(num);
        }
    });
    return [answer1, answer2];
};

// Time Complexity: O(n^2);
// Space Complexity: O(n);
