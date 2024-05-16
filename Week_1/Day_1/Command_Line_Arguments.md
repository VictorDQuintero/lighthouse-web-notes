## What are Command Line Arguments?

Command line arguments are strings of text used to pass additional information to a program when an application is run through the command line interface (CLI) of an operating system.

`$ [runtime] [script_name] [argument-1 argument-2 argument-3 ... argument-n]`

Runtime can be node or java.

## Why Use Them?

- You can pass information to an application before it starts. This is particularly useful if you want to perform large number configuration settings.
- Command line arguments are passed as strings to your program. String data types can easily be converted to other data types within an application, making the arguments very flexible.
- You can pass an unlimited number of arguments via the command line.
- Command line arguments are used in conjunction with scripts and batch files, which is particularly useful for automated testing.

## How to do it in Node.js

### process.argv

The first element of the process.argv array will always be a file system path pointing to the node executable. The second element is the name of the JavaScript file that is being executed. And the third element is the first argument that was actually passed by the user.
