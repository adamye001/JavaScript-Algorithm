/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
	let adjacent = [];
	for (let i = 0; i < n; i++) {
		adjacent[i] = [];
	}
	connections.forEach((item) => {
		let [from, to] = item;
		adjacent[from].push({
			to,
			isAdd: false,
		});
		adjacent[to].push({
			to: from,
			isAdd: true,
		});
	});
	let result = 0;
	let visited = new Array(n).fill(false);
	visited[0] = true;
	dfs(0);

	return result;

	function dfs(start) {
		adjacent[start].forEach((toObj) => {
			if (visited[toObj.to]) {
				return;
			}
			visited[toObj.to] = true;
			if (!toObj.isAdd) {
				result++;
			}
			dfs(toObj.to);
		});
	}
};

// Time Complexity: O(n)
// Space Complexity: O(n)
