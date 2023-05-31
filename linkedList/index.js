const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };
a.next = b;
b.next = c;
c.next = d;

// Traverse the linkedList
let point = a;
while (point) {
    console.log(point.val);
    point = point.next;
}

// Insert Element
const e = { val: 'e' };
c.next = e;
e.next = d;

// Delete Element
c.next = d;