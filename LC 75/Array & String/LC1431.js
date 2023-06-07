/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies);
    let res = [];
    for (let i = 0; i < candies.length; i += 1) {
        if (candies[i] + extraCandies >= maxCandies) {
            res.push(true);
        } else {
            res.push(false);
        }
    }
    return res;
};


// Time Complexity: O(n)
// Space Complexity: O(n)
