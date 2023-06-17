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
 * @return {number[]}
 */
var rightSideView = function (root) {
    const ans = [];
    const quene = [];
    if (root) {
        quene.push(root);
    }
    while (quene.length) {
        const len = quene.length;
        ans.push(quene[len - 1].val);
        for (let i = 0; i < len; i++) {
            const cur = quene.shift();
            if (cur.left) {
                quene.push(cur.left);
            }
            if (cur.right) {
                quene.push(cur.right);
            }
        }
    }
    return ans;
};

// Time Complexity: O(n);
// Space Complexity: O(n);
