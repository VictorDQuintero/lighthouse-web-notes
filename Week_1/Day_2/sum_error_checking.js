if (process.argv.length < 4) {
  console.log('Please provide two numbers to sum.');
  process.exit(1);
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Please ensure both arguments are numbers.');
  process.exit(1);
}

let sum = addNumbers(num1, num2);
console.log(sum);
