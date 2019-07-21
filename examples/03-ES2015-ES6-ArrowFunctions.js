var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};

console.log(circleAreaES5(2));

const circleArea = r => { // {1} 
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};

console.log(circleArea(2));

const circleArea2 = r => 3.14 * r * r;

console.log(circleArea2(2));

// if doest'n have parameters

const hello = () => console.log('hello!');

hello();

// we can define default parameters

function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

console.log(sum(4, 2)); // outputs 9 

// Before ES2015

function sum(x, y, z) {
    if (x === undefined) x = 1;
    if (y === undefined) y = 2;
    if (z === undefined) z = 3;
    return x + y + z;
}

console.log(sum(4, 2)); // outputs 9 

// using the arguments array

function sum() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    return x + y + z;
}

console.log(sum(4, 2)); // outputs 9 
