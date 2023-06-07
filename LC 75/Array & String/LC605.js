/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let ans = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] == 0 &&
            (flowerbed[i - 1] ?? 0) == 0 &&
            (flowerbed[i + 1] ?? 0) == 0
        ) {
            flowerbed[i] = 1;
            ans++;
        }
    }
    return ans >= n;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
