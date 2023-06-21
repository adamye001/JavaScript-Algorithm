var SmallestInfiniteSet = function () {
	this.list = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
	let n = Infinity,
		num = 0;
	for (let i = 1; i < n; i++) {
		if (this.list.indexOf(i) == -1) {
			this.list.push(i);
			num = i;
			break;
		}
	}
	return num;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
	if (this.list.indexOf(num) != -1) {
		let idx = this.list.indexOf(num);
		this.list = this.list.slice(0, idx).concat(this.list.slice(idx + 1));
	}
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
