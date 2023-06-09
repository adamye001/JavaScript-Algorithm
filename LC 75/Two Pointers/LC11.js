/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let res = 0;
    while (i < j) {
        if (height[i] > height[j]) {
            let curValue = height[j] * (j - i);
            if (curValue > res) {
                res = curValue;
            }
            j--;
        } else {
            let curValue = height[i] * (j - i);
            if (curValue > res) {
                res = curValue;
            }
            i++;
        }
    }
    return res;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
