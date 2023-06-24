/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let [left, right] = [0, nums.length - 1];
	while (left < right) {
		const mid = left + ((right - left) >> 1);
		if (nums[mid] > nums[mid + 1]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
};

// Time Complexity: O(logN)
// Space Complexity: O(1)
