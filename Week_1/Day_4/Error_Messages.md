# GETTING COMFORTABLE WITH ERROR MESSAGES

## Syntax Errors

./focal/syntax-error.js:4

This tells us that the error happened in a file called ./focal/syntax-error.js, but more importantly, the :4 on the end of the file name tells us the error was thrown by line 4 in this file. This is very useful, because it helps us narrow down our search for the error.

### Stack Traces

```
at exports.runInThisContext (vm.js:73:16)
    at Module._compile (module.js:443:25)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Function.Module.runMain (module.js:501:10)
    at startup (node.js:129:16)
    at node.js:814:3
```

This bit is called a stack trace, which shows the state of our program when the error occurred. In the future, we'll discuss the more technical details of what stack traces are and how they're determined, but for now, take a look at the file names printed out in the stack trace, in the parentheses at the end of each line: vm.js, module.js and node.js. We don't know anything about them. They're not even our code, we didn't write them!

It's possible, as we'll see once we start working with modules, that the error didn't come from the exact file the error was thrown in (in our case ./focal/syntax-error.js) but that it came from one of these files. However, it's a safe bet to assume the error is not caused by someone elses (hopefully) well-tested code but by ours – it is a work in progress, after all.

- Unexpected token errors occur when JavaScript expected something that wasn't there, which frequently means we're missing a parenthesis, bracket or curly brace. In our case, we're missing a }.

## Reference Errors

```javascript
var firstName = "Jane";
var lastName = "Doe";

console.log(firstName, lasName);
```

```node reference-error.js
./focal/reference-error.js:4
console.log(firstName, lasName);
                       ^
ReferenceError: lasName is not defined
```

## Type Errors

`````javascript
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLower());
````;
`````

ode type-error.js
./focal/type-error.js:3
console.log(favouriteMeal.toLower());
^
TypeError: undefined is not a function

`````

We simply forgot the actual name of the function

````javascript
var favouriteMeal = "BREAKFAST";

console.log(favouriteMeal.toLowerCase());
`````
