/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // give the next node val to the given node
    node.val = node.next.val;
    // pass the next node of next node to the given node
    node.next = node.next.next;
};