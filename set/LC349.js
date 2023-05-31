/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     return [...new Set(nums1)].filter(n => new Set(nums2).has(n));
// };

var intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(n => nums2.includes(n));
};

// Time Complexity: O(m * n); (filter, includes) 
// Space Complexity: O(m); (create a new set)