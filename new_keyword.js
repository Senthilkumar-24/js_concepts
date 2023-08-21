/**
 * new keyword
 * - New keyword in javascript is used to create an instance of an object that has a constructor function.
 * - with new keyword used, following actions will be taken:
 *      - new empty object is created.
 *      - The this variable is made to point to the newly created object.
 * 
 *   Syntax: new constructorFunction(args)
 *      ConstructorFunction: A class or function that specifies the type of the object instance.
 *      Args: A list of values that the constructor will be called with.
 */

function Fruit(color, taste, seeds) {
    this.color = color;
    this.taste = taste;
    this.seeds = seeds;
}
  
// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);
  
// Display the result
console.log(fruit1.color); // Yellow;

console.log(fruit1); 
// {
//     color: 'Yellow',
//     taste: 'Sweet',
//     seeds: 1
// }

'use strict';

let a = {};

console.log('The value of a let keyword', a);

const getValue = () => {
    const a = {
        'id': 24,
        'name': 'Senthil'
    };

    console.log('The value of a const keyword', a);

    console.log('the value of a this keyword inside function', this);
};

getValue();

console.log('Value of this keyword outside function', this);

const b = new Object();

console.log('The value of b using new Object := ', b);

console.log('Value of b using this keyword := ', this);

var c = [];

console.log('Value of c var keyword := ', c);
console.log('Value of c this keyword := ', this);

var d = new Array();

console.log('Value of d new Object := ', d);
console.log('Value of d this keyword:= ', JSON.stringify(this));
