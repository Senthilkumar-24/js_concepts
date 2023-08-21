// break statement:
// Break out of a loop when i is 3:
let text = "";
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  text += i + "<br>";
}
/**
 * The break statement breaks out of a switch or a loop.
 * In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.
 * In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).
 * Syntax: break;
 */
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}
/**
 * Break statement using label
 * The break statement can use a label reference, to break out of any JavaScript code block (see "More Examples" below).
 * Without a label, break can only be used inside a loop or a switch.
 * Syntax: break labelName;
 */

text = "";
const cars = ["BMW", "Volvo", "Saab", "Ford"];

list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  text += cars[2] + "<br>";
  break list;
  text += cars[3] + "<br>";
}

// Break out of nested loop using labels

// The first for loop is labeled "Loop1"
text = '';

Loop1:
for (let i = 0; i < 3; i++) {
    text += i + "<br>";

    // The second for loop is labeled Loop2:  
    Loop2:
    for (let i = 10; i < 15; i++) {
        text += i + "<br>";
        if (i === 12) break Loop1;
    }
}


// Continue statement
/**
 * The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
 * The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.
 *
 * However, when the continue statement is executed, it behaves differently for different types of loops:
 *
 * In a while loop, the condition is tested, and if it is true, the loop is executed again
 * In a for loop, the increment expression (e.g. i++) is first evaluated, and then the condition is tested to find out if another iteration should be done
 * The continue statement can also be used with an optional label reference.
 *
 * Note: The continue statement (with or without a label reference) can only be used inside a loop.
 */

cars = ["BMW", "Volvo", "Saab", "Ford"];
text = "";
for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "Saab") {
    continue;
  }
  text += cars[i] + "<br>";
}

// continue statement using label reference
Loop1:
for (let i = 0; i < 3; i++) {
  text += i + "<br>";

// The second for loop is labeled Loop2:  
Loop2:       
  for (let i = 10; i < 15; i++) {
    if (i === 12) continue Loop2;
    text += i + "<br>";
  }
}

// for loop loops over the code block while condition is true;

// for...of loops over the values of any iterable;

// for...in loops over the properties of an Object;