/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let res = 0;
    const dfs = (node, l, r) => {
        res = Math.max(res, l, r);
        if (node.left) dfs(node.left, r + 1, 0);
        if (node.right) dfs(node.right, 0, l + 1);
    };
    dfs(root, 0, 0);
    return res;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
