# Objects

## At a glance

Objects:

- Contain key-value pairs; each key maps to a value.
- Contain keys which are always strings (or symbols, but it's less common and not important right now).
- Have unique keys; the same key cannot appear twice in an object.
- Have their keys point to values which can be of any type.

## Object Literals

As a recap, some values can be represented by <i>literals</i>.

- String literals like

```javascript
"lighthouse";
```

- Number literals like

```javascript
"5";
"7.5";
```

- Arrays have literal syntax using square brackets

```javascript
[1, 2, 3];
```

Likewise, objects have a literal syntax using braces {}. Here is an empty object literal assigned to a variable:

```javascript
const emptyObject = {};
```

And an object literal with a single key-value pair:

```javascript
const tinyObject = { size: "Tiny" };
const tinyObject = { size: "Tiny" };
```

Key: "size", value: "Tiny"

Furthermore, objects allow us to easily access the values (in the second column) via a quick reference to their respective keys (in first column).

## Object Values

An object's values can be of any type. The following example shows an object with primitive values:

```
const myObject = {
  a: 6,     // Number
  b: "abc", // String
  c: true,  // Boolean
  d: null,  // Null
};
```

While valid to use undefined as an object value it is not typically done as undefined has a special meaning when accessing values in an object.

## Accessing Object Values

Question to self: "Can a key name be repeated anywhere in the code?".

Yes, you can:

If that variable name instead points to a string, then that can be an interesting way of accessing a key:

```javascript
const person = { firstName: "Khurram" };
const propertyName = "firstName";
const firstName = person[propertyName]; // interpreted as person["firstName"], and therefore works fine :)
```

An alternative way to access the same value would be person.firstName.

Does it seem to act like a block/local variable

## Accessing a Key That Doesn't Exist

We would get back undefined. That's why it's not a good idea to use undefined as an object value manually.

## Assigning a New Value to a Key

```javascript
const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"] = 22;
mary; // shows the resulting object with both properties
```

## Objects as Values

Objects can be nested

```javascript
const person = {
  name: "Paul",
  address: {
    street: "310 W 95th",
    city: "New York",
    zipCode: 10027,
  },
};
person["address"]["city"]; // => "New York"
```

Keys don't have to have the quotes because they are always interpreted as a literal string, even if it doesn't have quotes. But, if the key contains spaces, hyphens or periods, quote them.

## Object Keys

Method: Object.keys()
Function: Inspects an object's keys and returns them as an array.

## Objects and Iteration

Use for...in statement.

```javascript
var planetMoons = {
  mercury: 0,
  venus: 0,
  earth: 1,
  mars: 2,
  jupiter: 67,
  saturn: 62,
  uranus: 27,
  neptune: 14,
};

for (var planet in planetMoons) {
  var numberOfMoons = planetMoons[planet];
  console.log("Planet: " + planet + ", # of Moons: " + numberOfMoons);
}
```
