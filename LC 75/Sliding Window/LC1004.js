/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let i = 0,
        j = 0;
    let maxLen = 0;
    let zero = 0;

    while (j < nums.length) {
        if (nums[j] == 0) {
            zero++;
        }
        while (zero > k) {
            if (nums[i] == 0) {
                zero--;
            }
            i++;
        }

        j++;

        if (j - i > maxLen) {
            maxLen = j - i;
        }
    }

    return maxLen;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
