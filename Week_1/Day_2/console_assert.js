node

console.assert(1 === 1); // => nothing happens because true

console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal

//We could use this to test out a simple function.

// FUNCTION IMPLEMENTATION
const sum = function (a, b) {
  return a + b;
};

// TEST CODE
console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3); // bad / incorrect assertion, and we see it fail!
