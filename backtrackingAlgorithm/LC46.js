/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push(path);
        }
        nums.forEach((n) => {
            if (path.includes(n)) {
                return;
            }
            backtrack(path.concat(n));
        });
    };
    backtrack([]);
    return res;
};

// Time Complexity: O(n!) n! = 1 * 2 * 3 * ... * (n - 1) * n
// Space Complexity: O(n)
