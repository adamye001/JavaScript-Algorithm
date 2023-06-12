/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const map = new Map();
    for (let i = 0; i < grid.length; i++) {
        const item = grid[i].join(",");

        map.set(item, (map.get(item) || 0) + 1);
    }
    console.log(map);
    let ans = 0;

    for (let j = 0; j < grid.length; j++) {
        let str = [];
        for (let i = 0; i < grid.length; i++) {
            str.push(grid[i][j]);
        }
        console.log(str);
        const item = str.join(",");

        if (map.has(item)) {
            ans += map.get(item);
        }
    }
    return ans;
};

// Time Complexity: O(n^2);
// Space Complexity: O(n^2);
