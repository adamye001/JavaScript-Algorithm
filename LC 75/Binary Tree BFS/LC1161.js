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
var maxLevelSum = function (root) {
    let maxSum = root.val,
        level = 1,
        res = 1;
    const quene = [];
    if (root) {
        quene.push(root);
    }
    while (quene.length) {
        let curSum = 0,
            len = quene.length;
        quene.forEach((node) => (curSum += node.val));
        if (curSum > maxSum) {
            maxSum = curSum;
            res = level;
        }
        level++;
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
    return res;
};

// Time Complexity: O(n);
// Space Complexity: O(n);
