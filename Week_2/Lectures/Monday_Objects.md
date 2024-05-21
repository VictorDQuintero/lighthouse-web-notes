Primitive Data types:
Every primitive data type needs to have a falsey

Boolean - false
Strings - " "
Numbers - 0
Undefined, Null - They are already falsey

Not primitive data types:
Truthy cause they are data structures
Objects -> {}
Arrays -> []

NaN - Is its own falsey? It's more like an error/safety precaution

## Objects

```javascript
//List information about car
// Num of wheels
// Num of doors
//  Color
//Electric, Hybrid, Gas Engine

const cars1 = [];
const cars2 = [];
```

List => Arrays
Specific info on an item => Object

### How to access key value

- Dot notation
- Square bracket notation

#### Dot notation

object.key

#### Bracket notation

object["key"];
const key1 = "key" // this is wrong
object[key1];

No real advantage, just contextual

Dot notation doens't acces the variable (value?)

#### Methods

Methods are invoked with parenthesis at the end

Good stuff at around the 0:45 mark

#### Looping

for...in -> loops through keys
for...of -> loops through the elements of array

1:13 mark
1:20 see this!!!!!

for the course use object.keys(), object.values()
object.entries() array of arrays, each key-value pair has its own array

#### deep keys

1:30

bigObject.floors.main.floors.second.level

#### this

1:39
