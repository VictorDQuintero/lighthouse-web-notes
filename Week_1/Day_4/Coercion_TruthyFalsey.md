## Double Equals, Triple Equals, and Type Coercion

Triple equals (===) not only compare two values but also the type of those values

Double equals (==) will attempt to force the two values to be of the same type, if possible. This type coercion.

!= similar to ==
!== similar to ===

### Truthy and Falsey

```javascript
0 == flase;
```

In JS everything has an inherent Boolean value, commonly referred to as Truthy r Falsey value. 0 holds a falsey value

```javascript
// All of the following are inherently falsey:

False;
// False is False. Makes sense, right?

0;
// 0 is the only falsey Number

("");
// an empty string is falsey

null;
// a null, or empty value, is falsey.

undefined;
// an object that has not been defined is considered falsey.

NaN;
// Not a Number. You'll learn more about NaN as we go on.
```

```javascript
username = ""; // falsey, empty string

if (!username) {
  //not falsey is true
  username = "Siobhan";
}

shoppingList = [];

if (!shoppingList.length) {
  // ***.length will return 0, not falsey is true
  shoppingList.push("coconut milk");
}
```
