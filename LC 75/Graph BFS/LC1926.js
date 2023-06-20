/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
	let walkableArr = [[...entrance, 0]];
	let pos = [
		{
			x: -1,
			y: 0,
		},
		{
			x: 1,
			y: 0,
		},
		{
			x: 0,
			y: -1,
		},
		{
			x: 0,
			y: 1,
		},
	];
	while (walkableArr.length) {
		let [row, col, step] = walkableArr.shift();
		for (let i = 0; i < pos.length; i++) {
			let { x, y } = pos[i];
			let nextX = row + x;
			let nextY = col + y;
			let nextRow = maze[nextX];
			if (nextRow) {
				if (nextRow[nextY] === '.') {
					if (
						nextX === 0 ||
						nextX === maze.length - 1 ||
						nextY === 0 ||
						nextY === maze[nextX].length - 1
					) {
						return step + 1;
					}
					maze[nextX][nextY] = '+';
					walkableArr.push([nextX, nextY, step + 1]);
				}
			}
		}
		maze[row][col] = '+';
	}
	return -1;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
