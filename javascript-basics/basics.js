// IF ELSE SWITCH TERNARY
console.log('IF ELSE SWITCH TERNARY');
var a = 34;
// false values: false, '', NaN, null, undefined, 0
if (a) {
  console.log('a is true');
} else {
  console.log('a is false');
}

switch (a) {
  case 30:
    console.log('a = 30');
    break;
  case 34:
    console.log('a = 34');
    break;
  case 35:
    console.log('a = 35');
    break;
  default:
    console.log('a is default');
}

console.log(`a is ${a > 20 ? 'big' : 'small'}`);

// FOR WHILE DO WHILE FOR IN, FOR OF, FOR EACH
console.log('FOR WHILE DO WHILE FOR IN, FOR OF, FOR EACH');
for (let i = 0; i < 5; i++) {
  console.log(`i = ${i}`);
}

a = 0;
while (a < 5) {
  a++;
  console.log(`a is ${a}`);
}
a = 0;
do {
  a++;
  console.log(`a is ${a}`);
} while (a < 5);

a = {prop: '1', prop2: '2'};
for (const key in a) {
  console.log(`key = ${key}`);
}
a = [1, 2, 3, 4];
for (const value of a) {
  console.log(`value = ${value}`);
}

a.forEach((item, index) => {
  console.log(`value = ${item}, index = ${index}`);
});

// TRY CATCH FINALLY
console.log('TRY CATCH FINALLY');
try {
  a = null;
  a['asd'] = 2;
} catch (e) {
  console.log(`error = ${e}`);
} finally {
  console.log('finally');
}

// FUNCTION, ARROW FUNCTION, CALLBACK
console.log('FUNCTION, ARROW FUNCTION, CALLBACK');

a = function () {
  console.log('function a called');
};
a();
function b() {
  console.log('function b called');
}
b();
a = () => ({a: 1, b: 2});
console.log(a());

a = (callback) => {
  if (callback) {
    callback();
  }
};
a(() => console.log('callback'));

// VAR LET CONST SCOPE THIS
console.log('VAR LET CONST SCOPE THIS');

var q = 1;
let w = 2;
const e = 3;
{
  console.log(q, w, e);
  var r = 4;
  let t = 5;
}
// console.log(r, t);

function f() {
  console.log(this);
}
f();
a = {f};
a.f();

a = {f: () => console.log(this)};
a.f();

// DATA TYPES
var a = 1;
var b = true;
var c = 'str';
var d = {a: a};
var ee = null;
var f = undefined;
var array = [1, 2, 3];
console.log(`typeof a = ${typeof a}`);
console.log(`typeof b = ${typeof b}`);
console.log(`typeof c = ${typeof c}`);
console.log(`typeof d = ${typeof d}`);
console.log(`typeof ee = ${typeof ee}`);
console.log(`typeof f = ${typeof f}`);
console.log(`typeof array = ${typeof array}`);
console.log(Number('47'));


// OBJECT METHODS/FUNCTIONS
console.log('OBJECT METHODS/FUNCTIONS');
console.log(Object.keys({prop1: 1, prop2: 2}));
console.log(Object.values({prop1: 1, prop2: 2}));
var a = {prop1: 1, prop2: 2};
var b = Object.assign({}, a);
console.log('b', b, a === b);

// SPREAD DELETE DESTRUCTURING
console.log('SPREAD DELETE DESTRUCTURING');
var c = {...a, key1: '192'};
console.log(c);

delete c['key1'];
console.log(c);

var {prop1, prop2} = a;
console.log(prop1, prop2);
var array = [1, 2, 3, 4, 5];
var [value1, value2] = array;
console.log(value1, value2);

// ARRAY METHODS
console.log('ARRAY METHODS');

console.log(`find = ${array.find((item) => item === 6)}`);
console.log(`findIndex = ${array.findIndex((item) => item === 6)}`);
console.log(`includes = ${array.includes(4)}`);
console.log(`indexOf = ${array.indexOf(4)}`);
console.log(`mapped = ${array.map((item) => {
  return item * 10;
})}`);
console.log(`filter = ${array.filter((item) => {
  return item > 3;
})}`);
array.push(6);
console.log(`push = ${array}`);
array.pop();
console.log(`pop = ${array}`);
array.unshift(0);
console.log(`unshift = ${array}`);
array.shift();
console.log(`shift = ${array}`);
array.splice(2, 1);
console.log(`splice = ${array}`);
console.log(`slice = ${array.slice(2)}`);

// DOM API
console.log(document);
const div = document.querySelector('div.container');
console.log(div);
console.log(div.classList);
div.classList.add('my-class');
console.log(div.classList);
div.style['background-color'] = 'red';
div.style.width = '100px';
div.style.height = '100px';
div.addEventListener('mousemove', (event) => {
  console.log(event);
});

function handleClick(event, element) {
  console.log(`click ${event}`, element);
}


