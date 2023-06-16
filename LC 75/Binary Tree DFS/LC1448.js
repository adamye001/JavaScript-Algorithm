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
var goodNodes = function (root) {
    let count = 0;
    const dfs = (n, max) => {
        if (!n) {
            return;
        }
        if (n.val >= max) {
            count++;
        }
        dfs(n.left, Math.max(max, n.val));
        dfs(n.right, Math.max(max, n.val));
    };
    dfs(root, root.val);
    return count;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
