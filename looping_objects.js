//Methods used to loop through objects in javascript are:
1. for...in loop
2. Object.keys Method
3. Object.values Method
4. Object.entries Method

const items = {
    'first': new Date(),
    'second': 2,
    'third': 'test'
};

/**
 * items.map(item => {});
 * items.forEach(element => {});
 * for (const item of items) {};
 * will throw errors.
 */
/**
 * for...in loop
 */
for (const key in items) {
    // loops over its properties as well
    // So we need to use hasOwnPropert() method explicitly to check property is belong to the Object.
    console.log(`${key}: ${items[key]}`);
}

/**
 * Object.keys()
 * - introduced in ES6 version of ECMAScript
 * - easier to loop over objects
 * - used to fetch all the keys in the object as an array.
 */
const courses = {
    java: 10,
    javascript: 55,
    nodejs: 5,
    php: 15
};

const keys = Object.keys(courses);
console.log(keys); // ['java', 'javascript', 'nodejs', 'php']

/**
 * Object.values()
 * - introduced in ES8 version of ECMAScript
 * - easier to loop over Objects opposite to the Object.keys() method.
 * - used to fetch all the keys in the object as an array.
 */
const animals = {
    tiger: 1,
    elephant: 4,
    cat: 2,
    monkey: 3
};

const values = Object.values(animals); // [1, 4, 2, 3]

/**
 * Object.entries()
 * - introduced in ES8 version of ECMAScript
 * - easier to traversing an array.
 * - used to fetch all the keys and values in the object and outputs as an array.
 */
const animals = {
    tiger: 1,
    elephant: 4,
    cat: 2,
    monkey: 3
};

const entries = Object.values(animals);
/**
 * [ 
 *  ['tiger', 1]
 *  , ['cat', 2]
 *  , ['monkey', 3]
 *  , ['elephant', 4]
 * ]
 */