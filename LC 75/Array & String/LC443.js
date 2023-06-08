/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    const len = chars.length;
    let s = "";
    let i = 0;
    let j = i + 1;
    while (j <= len) {
        if (chars[i] === chars[j]) {
            j++;
        } else {
            const tempS = j - i > 1 ? `${chars[i]}${j - i}` : `${chars[i]}`;
            s += tempS;
            i = j;
            j = i + 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        chars[i] = s[i];
    }
    return s.length;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
