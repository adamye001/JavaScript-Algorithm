/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = [];
    let arr2 = [];
    const dfs = (n, arr) => {
        if (!n) {
            return;
        }
        if (!n.left && !n.right) {
            arr.push(n.val);
        }
        dfs(n.left, arr);
        dfs(n.right, arr);
    };
    dfs(root1, arr1);
    dfs(root2, arr2);
    return arr1.toString() === arr2.toString();
};

// Time Complexity: O(n)
// Space Complexity: O(n)
