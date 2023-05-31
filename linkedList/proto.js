const obj = {};
const func = () => {};
const arr = [];

// obj -> Object.prototype -> null
// func -> Function.prototype -> Obejct.prototype -> null
// arr -> Array.prototype -> Object.prototype -> null

const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) {
            return true;
        }
        p = p.__proto__;
    }
    return false;
};

var foo = {},

F = function () {};


Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

// foo.a = 'value a'
// foo.b = undefined
// F.a = 'value a'
// F.b = 'value b'
