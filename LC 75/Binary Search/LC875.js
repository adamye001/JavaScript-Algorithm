/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let l = 1;
	let r = Math.max(...piles);
	let mid;
	while (l < r) {
		mid = Math.floor(l + (r - l) / 2);
		if (canFinish(mid, h, piles)) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return l;
};

function canFinish(k, h, piles) {
	let totalTime = 0;
	for (var i = 0; i < piles.length; i++) {
		if (piles[i] <= k) {
			totalTime += 1;
		} else {
			totalTime += Math.ceil(piles[i] / k);
		}
		if (totalTime > h) {
			return false;
		}
	}
	return true;
}

// Time Complexity: O(nlogN)
// Space Complexity: O(1)
