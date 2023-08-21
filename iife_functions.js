/**
 * IIFE - Immediately Invoking Function Expressions
 * A function is created/declared and called/executed immediately.
 */
// Ways to create IIFE
(function () {
    console.log("Parentheses around the function");
})();

(function () {
    console.log("Parentheses around the whole thing");
}());

!function () {
    console.log("Bitwise NOT operator starts the expression");
}();

+function () {
    console.log("Unary plus starts the expression");
}();