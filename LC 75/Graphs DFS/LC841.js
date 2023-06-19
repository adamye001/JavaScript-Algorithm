/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
	const dfs = (key, rooms, visited) => {
		if (visited[key]) return;
		visited[key] = 1;
		for (let k of rooms[key]) {
			dfs(k, rooms, visited);
		}
	};
	const visited = new Array(rooms.length).fill(false);
	dfs(0, rooms, visited);
	for (let i of visited) {
		if (!i) {
			return false;
		}
	}
	return true;
};

// Time Complexity: O(n)
// Space COmplexity: O(n)
