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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	if (root != null) {
		if (root.val > key) {
			root.left = deleteNode(root.left, key);
		} else if (root.val < key) {
			root.right = deleteNode(root.right, key);
		} else {
			if (root.left == null || root.right == null) {
				root = root.left == null ? root.right : root.left;
			} else {
				let node = root.left;
				while (node.right != null) {
					node = node.right;
				}
				node.left = deleteNode(root.left, node.val);
				node.right = root.right;
				root = node;
			}
		}
	}
	return root;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
