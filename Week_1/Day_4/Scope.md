# Scopes

## Global vs Local Scopes

A globally-scoped variable is available everywhere in the code, whereas a locally-scoped variable would only be available within the function in which it's defined.

- If a variable is not defined with a global scope and it's only initialized and defined inside a function (block), when it is called outside of the function it will throw a ReferenceError.

- If two functions of the same name are defined both globally and within a function, when the variable within the function is called it will take precedence over the global definition, if the variable is called outside of the function it will have the global definition

```javascript
let myVar = "global";

const myFunction = function () {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar);
};

myFunction();

console.log("outside myFunction, myVar is:", myVar);
```

- It is ideal if functions try to avoid reading outer scope variables. If a function needs some information / data, then that data should instead be passed in as a parameter (aka argument), making it available within the function's inner scope.

## Conclusion

- Give your functions precise verb/action based names
- Use camelCasedNames (like this one)
- Properly indent the function code
- Functions should focus on a single task: returning a value or causing a side effect. Break your function into additional smaller functions if you find it doing two or more things
  - One single task could be to compute and return a value (eg: zeroPad)
  - Another single task could be to perform a side effect such as logging a message to the screen (eg: printFarmInventory)
- Data needed by Functions should be passed in as parameters/arguments (i.e. local scope) instead of being accessed directly
