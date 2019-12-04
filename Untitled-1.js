'use strict';

const myObject = {
  foo: 'blaam',
  bar: 'blorp',
  fum: 'fe fi fo',
  quux: 'I dont know...yet',
  spam: 'gross fake ham'
};

function objectLoop(obj) {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
console.log(objectLoop(myObject));
