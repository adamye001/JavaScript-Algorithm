/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let point = head,
        nums = [];
    while (point) {
        nums.push(point.val);
        point = point.next;
    }
    let l = 0,
        r = nums.length - 1,
        res = 0;
    while (l < r) {
        res = Math.max(res, nums[l] + nums[r]);
        l++;
        r--;
    }
    return res;
};

// Time Complexity: O(n);
// Space Complexity: O(n);
