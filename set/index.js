// Deduplication
const arr = [1,1,2,2];
const arr2 = [...new Set(arr)];

// check if element is in the set
const set = new Set(arr);
const has = set.has(3);

// find intersection
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter(item => set2.has(item)));
