/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
	let n = spells.length;
	let m = potions.length;

	potions.sort((a, b) => a - b);

	const ans = [];

	for (let i = 0; i < n; i++) {
		ans.push(m - binarySearch(potions, success / spells[i]));
	}

	return ans;
};

function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		const mid = left + ((right - left) >> 1);
		if (arr[mid] >= target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return left;
}

// Time Complexity: O(nlogk)
// Space Complexity: O(n)
