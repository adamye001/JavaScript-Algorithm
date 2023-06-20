/**
 * @param {number[][]} grid
 * @return {number}
 */
const dirs = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
];
var orangesRotting = function (grid) {
	const m = grid.length,
		n = grid[0].length;
	let cnts = 0,
		cost = 0,
		queue = new Array();
	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			if (grid[i][j] > 0) {
				cnts++;
				if (grid[i][j] == 2) queue.push([i, j]);
			}
	while (queue.length > 0) {
		const nxt = new Array();
		cnts -= queue.length;
		for (const p of queue) {
			for (const d of dirs) {
				const nx = p[0] + d[0],
					ny = p[1] + d[1];
				if (nx >= 0 && ny >= 0 && nx < m && ny < n && grid[nx][ny] == 1) {
					grid[nx][ny] = 2;
					nxt.push([nx, ny]);
				}
			}
		}
		queue = nxt;
		if (queue.length > 0) cost++;
	}
	return cnts == 0 ? cost : -1;
};

// Time Complexity: O(n^2)
// Space Complexity: O(n)
