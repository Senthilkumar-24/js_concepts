let x = '1';
let myName = 'Senthil';

let myAge = 25;

// if
if (x == 1) {
    console.log('Condition satified!!');
}

// if-else
if (MyAge >=18) {
    console.log('Congratulations!!! You are eligible to vote...');
} else {
    console.log('Sorry, You are not eligible to vote!!');
}

// Nested if-else
if (myName === 'Senthil') {
    console.log('Your Identity Verified as Senthil!!');
} else if (MyName === 'Senthil kumar') {
    console.log('Your Identity Verified as Senthil kumar!!');
} else {
    console.log('Your Identity verification Failed!!');
    return;
}

// Ternary/Conditional Operator
const greeting = myAge > 25 && myName === 'Senthil'
    ? 'Happy Birthday Mr. Senthilkumar'
    : 'Good Morning Mr. Smith';

// falsy value doesn't execute the code
if (0 || '') {
    console.log('You are the loser!!!');
}

// But the below statment will be executed since the '0' is not an empty string and it becomes true
if ('0') {
    console.log('You are great!! you valued me!!');
}

// truthy value only execute the code
if (1) {
    console.log('Hurray!! You Win!!!');
}