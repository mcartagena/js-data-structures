// alert('Hello, World!');

// In JavaScript, the available types are number, string, boolean, function, and object. 
// We also have undefined and null, along with arrays, dates, and regular expressions.

var num = 1; // number
num = 3; // update an existing variable
var price = 1.5; // number decimal point floating
var myName = 'Packt'; // string
var trueValue = true; // boolean
var nullVar = null; // null value
var und; // undefined

console.log('num: ' + num);
console.log('myName: ' + myName);
console.log('trueValue: ' + trueValue);
console.log('price: ' + price);
console.log('nullVar: ' + nullVar);
console.log('und: ' + und);

// output to the html page
document.write('My text here <br/>');

// scope variables

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // global
console.log(myFunction()); // local 

console.log(myOtherVariable); // global 
console.log(myOtherFunction()); // local
console.log(myOtherVariable); // local

// Operators

var num = 0; // Aritmethic operators 
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;

document.write('num ', num);
document.write('<br/> ');


num += 1; // Assigment operators
num -= 2;
num *= 3;
num /= 2;
num %= 3;

document.write('num ', num);
document.write('<br/> ');

console.log('num == 1 : ' + (num == 1)); // Comparison operators 
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));

console.log('true && false : ' + (true && false)); // Logical operators  
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));

// bitwise operators

console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

console.log('typeof num:', typeof num);   // number
console.log('typeof Packt:', typeof 'Packt');  // string
console.log('typeof true:', typeof true);  // boolean
console.log('typeof [1,2,3]:', typeof [1, 2, 3]);   // object
console.log('typeof {name:John}:', typeof { name: 'John' });  // object

// delete operator

var myObj = { name: 'John', age: 21 };
console.log('Initial object ', myObj); //outputs Object {name: "John"} 
delete myObj.age;
console.log('delete myObj.age ', myObj); //outputs Object {name: "John"} 

// The following table can help us better understand how true and false work in JavaScript:

// Value Type               Result
// undefined                false
// null                     false
// Boolean                  true is true and false is false
// Number                   The result is false for +0, -0, or NaN; otherwise, the result is true
// String                   The result is false if the string is empty (length is 0); otherwise, the result is true (length >= 1)
// Object                   true

// examples

console.log('How true and false work in JavaScript...');
console.log(' Value Type               Result');
console.log(' undefined                false');
console.log(' null                     false');
console.log(' Boolean                  true is true and false is false');
console.log(' Number                   The result is false for +0, -0, or NaN; otherwise, the result is true');
console.log(' String                   The result is false if the string is empty (length is 0); otherwise, the result is true (length >= 1)');
console.log(' Object                   true');

function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

console.log('true');
testTruthy(true); // true 
console.log('false');
testTruthy(false); // false 
console.log('new Boolean(false)');
testTruthy(new Boolean(false)); // true (object is always true) 

console.log('\'\'');
testTruthy(''); // false 
console.log('Packt');
testTruthy('Packt'); // true 
console.log('new String(\'\')');
testTruthy(new String('')); // true (object is always true) 

console.log('1');
testTruthy(1); // true 
console.log('-1');
testTruthy(-1); // true 
console.log('NaN');
testTruthy(NaN); // false 
console.log('new Number(NaN)');
testTruthy(new Number(NaN)); // true (object is always true) 

console.log('{}');
testTruthy({}); // true (object is always true) 

var obj = { name: 'John' };
console.log('var obj = { name: \'John\' }');
testTruthy(obj); // true 
console.log('obj.name');
testTruthy(obj.name); // true 
console.log('obj.age -> undefined');
testTruthy(obj.age); // false age (property does not exist) 

console.log('packt' == true);

console.log('packt' === true); //false  
console.log('packt' === 'packt'); //true 
var person1 = { name: 'John' };
var person2 = { name: 'John' };
console.log(person1 === person2); //false, different objects 

var num = 1;
if (num === 1) {
    console.log('num is equal to 1');
}

var num = 0;
if (num === 1) {
    console.log('num is equal to 1');
} else {
    console.log('num is not equal to 1, the value of num is ' + num);
}

if (num === 1) {
    num--;
} else {
    num++;
}

(num === 1) ? num-- : num++;

var month = 5;
if (month === 1) {
    console.log('January');
} else if (month === 2) {
    console.log('February');
} else if (month === 3) {
    console.log('March');
} else {
    console.log('Month is not January, February or March');
}

var month = 5;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Month is not January, February or March');
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

function sayHello() {
    console.log('Hello!');
}

sayHello();

function output(text) {
    console.log(text);
}

output('Hello!');
output('Hello!', 'Other text');

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);
output(result); // outputs 3 

var obj = new Object();
var obj = {};

obj = {
    name: {
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
};

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('title', 'pag', 'isbn');

console.log(book.title); // outputs the book title 
book.title = 'new title'; // update the value of the book title 
console.log(book.title); // outputs the updated value 

// only one instance is created and only public functions
Book.prototype.printTitle = function () {
    console.log(this.title);
};

book.printTitle();

function Libro(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    // there are as much instances as the class has
    this.printIsbn = function () {
        console.log(this.isbn);
    };
}

var libro = new Libro('title', 'pag', 'isbn');

libro.printIsbn();
