'use strict';
 /*
class Person {
  constructor(name, jobTitle) {
    this.name = name;
    this.jobTitle = jobTitle;
  }

  sayName() {
    return this.name; 
  }


}
*/

function makeLoop(x) {
  let i, len = x.length; 
  for (i = 0 ; i < len; i++) {

  }
 
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2));
console.log(add5(5));

console.log(add10(2323123));





class Child extends Person {
  constructor(babyTeeth) {
    super();
  }
}

function Person(name, jobTitle) {
  return {name, jobTitle}; 
};

Person.prototype.sayName = function() {
  return this.name;
}




func

const fred = new Person('Fred', 'Architect');
const phil = new Person('Phil', 'unemployed');
const me = new Person('Will', 'student');

const peopleArr = [fred, phil, me];

function looper(arr) {
  arr.forEach(obj => {
    console.log(obj.name, obj.jobTitle);
  });
}

looper(peopleArr);
console.log(fred.sayName());
console.log(me.sayName());



