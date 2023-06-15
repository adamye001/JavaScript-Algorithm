/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    if (!head.next) {
        return null;
    }
    let point = head,
        count = 0;
    while (point) {
        count++;
        point = point.next;
    }
    let midIndex = Math.floor(count / 2);
    (point = head), (count = 0);
    while (count < midIndex - 1) {
        count++;
        point = point.next;
    }
    point.next = point.next.next;
    return head;
};

// Time Complexity: O(n);
// Space Complexity: O(1);
