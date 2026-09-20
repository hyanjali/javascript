# 📅 Day 1 — JavaScript Variables

Welcome to **Day 1 of my JavaScript learning journey**! 🚀

Today, I started learning the fundamentals of JavaScript, beginning with **variables**.

## 📚 What I Learned

Today I learned about:

* `let`
* `const`
* `var`
* Declaring variables
* Assigning values to variables
* Updating variable values
* Redeclaring variables
* Using `console.log()` to display output

## 🔹 1. `let`

`let` is used to declare a variable whose value can be changed later.

```javascript
let age = 20;

age = 21;

console.log(age);
```

**Output:**

```text
21
```

## 🔹 2. `const`

`const` is used when the value should not be reassigned.

```javascript
const country = "India";

console.log(country);
```

**Output:**

```text
India
```

## 🔹 3. `var`

`var` is an older way of declaring variables in JavaScript.

```javascript
var name = "Anjali";

name = "Anjali Negi";

console.log(name);
```

**Output:**

```text
Anjali Negi
```

## 🧠 Important Difference

| Keyword | Can Update Value? | Can Redeclare? |
| ------- | ----------------- | -------------- |
| `let`   | ✅ Yes             | ❌ No           |
| `const` | ❌ No              | ❌ No           |
| `var`   | ✅ Yes             | ✅ Yes          |

## 💻 Practice

Today I practiced:

* Creating variables
* Changing variable values
* Printing values using `console.log()`
* Understanding the difference between `let`, `const`, and `var`

## 📁 Practice Files

01-variables/
│
├── let.js
├── const.js
└── var.js

## 🎯 Day 1 Goal

Build a clear understanding of JavaScript variables and how `let`, `const`, and `var` work.

### 🚀 Progress

**Day 1 — Variables ✅**

> One step closer to becoming better at JavaScript! 💻
> # 📅 Day 2 — JavaScript Data Types

Welcome to **Day 2 of my JavaScript learning journey**! 🚀

Today, I continued learning the fundamentals of JavaScript by understanding **data types**.

## 📚 What I Learned

Today I learned about:

* What data types are
* Primitive data types
* `String`
* `Number`
* `Boolean`
* `Undefined`
* `Null`
* `BigInt`
* `Symbol`
* Using `typeof` to check the data type of a value

## 🔹 1. String

A `String` is used to store text.

```javascript
let name = "Anjali";

console.log(name);
console.log(typeof name);
```

**Output:**

```text
Anjali
string
```

## 🔹 2. Number

A `Number` is used to store numerical values, including integers and decimal numbers.

```javascript
let age = 20;
let height = 5.4;

console.log(age);
console.log(height);
console.log(typeof age);
```

**Output:**

```text
20
5.4
number
```

## 🔹 3. Boolean

A `Boolean` can have only two values:

* `true`
* `false`

```javascript
let isStudent = true;

console.log(isStudent);
console.log(typeof isStudent);
```

**Output:**

```text
true
boolean
```

## 🔹 4. Undefined

A variable has the value `undefined` when it has been declared but no value has been assigned to it.

```javascript
let city;

console.log(city);
console.log(typeof city);
```

**Output:**

```text
undefined
undefined
```

## 🔹 5. Null

`null` represents an intentional absence of a value.

```javascript
let address = null;

console.log(address);
console.log(typeof address);
```

**Output:**

```text
null
object
```

> **Note:** `typeof null` returns `"object"`. This is a historical behavior in JavaScript.

## 🔹 6. BigInt

`BigInt` is used for very large integer values that cannot be safely represented by the regular `Number` type.

```javascript
let bigNumber = 12345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);
```

**Output:**

```text
12345678901234567890n
bigint
```

## 🔹 7. Symbol

`Symbol` is used to create unique values.

```javascript
let id = Symbol("id");

console.log(typeof id);
```

**Output:**

```text
symbol
```

## 🧠 JavaScript Data Types

| Data Type | Example        | `typeof` Result |
| --------- | -------------- | --------------- |
| String    | `"Hello"`      | `string`        |
| Number    | `25`           | `number`        |
| Boolean   | `true`         | `boolean`       |
| Undefined | `undefined`    | `undefined`     |
| Null      | `null`         | `object`        |
| BigInt    | `123n`         | `bigint`        |
| Symbol    | `Symbol("id")` | `symbol`        |

## 🔍 Using `typeof`

The `typeof` operator is used to find the type of a value.

```javascript
let name = "Anjali";
let age = 20;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

**Output:**

```text
string
number
boolean
```

## 💻 Practice

Today I practiced:

* Creating variables with different data types
* Using strings and numbers
* Working with boolean values
* Understanding `undefined` and `null`
* Learning about `BigInt` and `Symbol`
* Using `typeof` to check data types

## 📁 Practice Files

```text
02-data-types/
│
├── string.js
├── number.js
├── boolean.js
├── undefined.js
├── null.js
├── bigint.js
└── symbol.js
```

## 🎯 Day 2 Goal

Build a clear understanding of **JavaScript data types** and learn how to identify them using the `typeof` operator.

### 🚀 Progress

**Day 2 — Data Types ✅**

> Learning the building blocks of JavaScript, one day at a time! 💻🚀
> ## 🗓️ Day 3 — Operators

### 📚 Topic

**Operators in JavaScript**

Today I learned about the basic operators used to perform calculations, assign values, and compare values.

### 🔹 What I Learned

* **Arithmetic Operators**

  * `+` Addition
  * `-` Subtraction
  * `*` Multiplication
  * `/` Division
  * `%` Modulus
  * `**` Exponentiation

* **Assignment Operators**

  * `=` Assignment
  * `+=` Add and assign
  * `-=` Subtract and assign
  * `*=` Multiply and assign
  * `/=` Divide and assign

* **Comparison Operators**

  * `==` Equal to
  * `===` Strictly equal to
  * `!=` Not equal to
  * `!==` Strictly not equal to
  * `>` Greater than
  * `<` Less than
  * `>=` Greater than or equal to
  * `<=` Less than or equal to

### 💻 Practice

```js
// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

// Assignment Operators
let score = 10;

score += 5;
console.log(score); // 15

score -= 3;
console.log(score); // 12

// Comparison Operators
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 === 10);  // true
console.log(10 !== 5);   // true
```

### 📝 Key Takeaway

I learned how JavaScript operators are used to **calculate values, update variables, and compare data**.

**Day 3 completed ✅**
Day 4 — Logical Operators

Today you'll learn the three main logical operators in JavaScript:

1. && — AND

Returns true only when both conditions are true.

let age = 20;
let hasId = true;

console.log(age >= 18 && hasId); // true
2. || — OR

Returns true when at least one condition is true.

let isWeekend = false;
let isHoliday = true;

console.log(isWeekend || isHoliday); // true
3. ! — NOT

Reverses a Boolean value.

let isLoggedIn = true;

console.log(!isLoggedIn); // false
Quick practice

Try to predict the output before running each:

console.log(true && true);
console.log(true && false);
console.log(false || true);
console.log(false || false);
console.log(!true);
console.log(!false);
🏋️ Day 4 Exercises

Exercise 1: Create variables:

let age = 22;
let hasLicense = true;

Write a condition that checks whether the person is 18 or older AND has a license.

Exercise 2: Create:

let isStudent = true;
let isEmployee = false;

Check whether the person is a student OR an employee.

Exercise 3: Create:

let isRaining = false;

Use ! to check whether it is not raining.

Challenge:

let age = 25;
let hasTicket = true;
let isVIP = false;

A person can enter an event if they are 18+ AND have a ticket, OR if they are a VIP.

Write the logical condition for this.
## Day 5 — Strings

Today I learned about **Strings in JavaScript** and practiced using different string methods.

### 📚 Topics Covered

* Creating and working with strings
* String properties
* Common string methods
* Accessing characters in a string
* Converting strings to uppercase and lowercase
* Finding and extracting parts of a string
* Replacing text within a string

### 💻 Practice

I practiced methods such as:

* `length`
* `toUpperCase()`
* `toLowerCase()`
* `charAt()`
* `includes()`
* `indexOf()`
* `slice()`
* `substring()`
* `replace()`
* `trim()`

### 🎯 Goal

Understand how to manipulate and work with strings effectively in JavaScript through hands-on practice.

**Day 5 completed! ✅**
# 📅 Day 6 — Numbers & Math

Welcome to **Day 6 of my JavaScript learning journey!** 🚀

Today, I learned about **Numbers and Math methods in JavaScript**. I practiced different ways to work with numbers and perform mathematical operations using the built-in `Math` object.

## 📚 What I Learned

Today I learned about:

* Number data type
* Basic mathematical operations
* `Math.round()`
* `Math.floor()`
* `Math.ceil()`
* `Math.trunc()`
* `Math.abs()`
* `Math.pow()`
* `Math.sqrt()`
* `Math.max()`
* `Math.min()`
* `Math.random()`
* Using `console.log()` to display results

---

## 🔹 1. Numbers in JavaScript

JavaScript uses the `Number` data type to store both integers and decimal numbers.

```javascript
let age = 20;
let price = 99.99;

console.log(age);
console.log(price);
```

**Output:**

```text
20
99.99
```

---

## 🔹 2. Basic Arithmetic Operations

We can perform mathematical calculations using operators such as:

* `+` → Addition
* `-` → Subtraction
* `*` → Multiplication
* `/` → Division
* `%` → Remainder
* `**` → Power

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
```

**Output:**

```text
13
7
30
3.3333333333333335
1
1000
```

---

## 🔹 3. `Math.round()`

`Math.round()` rounds a number to the nearest integer.

```javascript
console.log(Math.round(4.6));
console.log(Math.round(4.3));
```

**Output:**

```text
5
4
```

👉 **Easy trick:** `round` = nearest number.

---

## 🔹 4. `Math.floor()`

`Math.floor()` rounds a number **down** to the nearest integer.

```javascript
console.log(Math.floor(4.9));
```

**Output:**

```text
4
```

👉 **Easy trick:** `floor` = go down.

---

## 🔹 5. `Math.ceil()`

`Math.ceil()` rounds a number **up** to the nearest integer.

```javascript
console.log(Math.ceil(4.1));
```

**Output:**

```text
5
```

👉 **Easy trick:** `ceil` = ceiling = go up.

---

## 🔹 6. `Math.trunc()`

`Math.trunc()` removes the decimal part without rounding.

```javascript
console.log(Math.trunc(9.87));
```

**Output:**

```text
9
```

👉 **Easy trick:** `trunc` = remove decimal.

---

## 🔹 7. `Math.abs()`

`Math.abs()` returns the positive value of a number.

```javascript
console.log(Math.abs(-25));
```

**Output:**

```text
25
```

👉 **Easy trick:** `abs` = absolute value.

---

## 🔹 8. `Math.pow()`

`Math.pow()` is used to calculate the power of a number.

```javascript
console.log(Math.pow(2, 3));
```

**Output:**

```text
8
```

This means:

```text
2³ = 8
```

We can also use the `**` operator:

```javascript
console.log(2 ** 3);
```

**Output:**

```text
8
```

---

## 🔹 9. `Math.sqrt()`

`Math.sqrt()` returns the square root of a number.

```javascript
console.log(Math.sqrt(25));
```

**Output:**

```text
5
```

---

## 🔹 10. `Math.max()`

`Math.max()` returns the largest number.

```javascript
console.log(Math.max(10, 25, 5, 40, 15));
```

**Output:**

```text
40
```

👉 **Easy trick:** `max` = maximum = biggest.

---

## 🔹 11. `Math.min()`

`Math.min()` returns the smallest number.

```javascript
console.log(Math.min(10, 25, 5, 40, 15));
```

**Output:**

```text
5
```

👉 **Easy trick:** `min` = minimum = smallest.

---

## 🔹 12. `Math.random()`

`Math.random()` generates a random decimal number between `0` and less than `1`.

```javascript
console.log(Math.random());
```

Example output:

```text
0.73648291
```

The output will be different each time.

### Random number from 1 to 10

```javascript
let number = Math.floor(Math.random() * 10) + 1;

console.log(number);
```

This gives a random number between:

```text
1 → 10
```

---

## 🧠 Quick Revision

| Method          | Meaning         | Example           | Result |
| --------------- | --------------- | ----------------- | ------ |
| `Math.round()`  | Nearest integer | `Math.round(4.6)` | `5`    |
| `Math.floor()`  | Round down      | `Math.floor(4.9)` | `4`    |
| `Math.ceil()`   | Round up        | `Math.ceil(4.1)`  | `5`    |
| `Math.trunc()`  | Remove decimal  | `Math.trunc(4.9)` | `4`    |
| `Math.abs()`    | Positive value  | `Math.abs(-10)`   | `10`   |
| `Math.pow()`    | Power           | `Math.pow(2,3)`   | `8`    |
| `Math.sqrt()`   | Square root     | `Math.sqrt(25)`   | `5`    |
| `Math.max()`    | Largest value   | `Math.max(2,8,5)` | `8`    |
| `Math.min()`    | Smallest value  | `Math.min(2,8,5)` | `2`    |
| `Math.random()` | Random number   | `Math.random()`   | `0–<1` |

## 💻 Practice

Today I practiced creating programs using numbers and `Math` methods, including:

1. Finding the largest number.
2. Finding the smallest number.
3. Finding the square root.
4. Rounding decimal numbers.
5. Removing decimal values.
6. Finding the absolute value.
7. Generating random numbers.
8. Creating a random number between 1 and 10.

## 🎯 Key Takeaway

Today I learned that JavaScript provides the built-in **`Math` object** to perform many mathematical operations easily.

I'm getting more comfortable with JavaScript **one day at a time!** 🚀💻

**#JavaScript #100DaysOfCode #LearningJavaScript #WebDevelopment #CodingJourney #Day6 #Programming**

📅 Day 7 — JavaScript Type Conversion 🔄

Welcome to Day 7 of my JavaScript learning journey! 🚀

Today, I learned about Type Conversion in JavaScript — how we can convert one data type into another.

📚 What I Learned

Today I learned about:

Converting String → Number
Converting Number → String
Converting values to Boolean
Number()
String()
Boolean()
parseInt()
parseFloat()
Understanding NaN
Difference between explicit and implicit type conversion
💻 Examples
🔹 String → Number
let age = "22";

age = Number(age);

console.log(age);
console.log(typeof age);

Output:

22
number
🔹 Number → String
let price = 500;

price = String(price);

console.log(price);
console.log(typeof price);

Output:

500
string
🔹 Convert to Boolean
let value = 1;

console.log(Boolean(value));

Output:

true
🔹 parseInt()

Used to convert a value into an integer.

let num = "25.99";

console.log(parseInt(num));

Output:

25
🔹 parseFloat()

Used when we want to keep the decimal value.

let num = "25.99";

console.log(parseFloat(num));

Output:

25.99
🔹 Understanding NaN

NaN means Not a Number.

let value = Number("hello");

console.log(value);

Output:

NaN
🧠 Quick Revision
Method	Purpose
Number()	Convert to number
String()	Convert to string
Boolean()	Convert to boolean
parseInt()	Convert to integer
parseFloat()	Convert to decimal number
typeof	Check data type
NaN	Not a Number
🎯 Practice for Today
Convert "100" into a number.
Convert 500 into a string.
Convert 1 and 0 into Boolean.
Use parseInt() on "45.67".
Use parseFloat() on "45.67".
Find the typeof of different variables.
Try converting "Hello" using Number().

Day 7 complete! ✅
Learning → Practicing → Improving 🚀

#JavaScript #100DaysOfCode #WebDevelopment #CodingJourney #JavaScriptLearning #Programming #LearningToCode #DeveloperJourney
Day 8 — JavaScript Conditionals if, else if, else 🚦

Welcome to Day 8 of my JavaScript learning journey! 🚀

Today, I learned about Conditional Statements in JavaScript.

Conditional statements help a program make decisions based on a condition.

📚 What I Learned

Today I learned about:

if statement
else statement
else if statement
Comparison operators
Checking conditions
Multiple conditions
Nested if statements
Using && and || with conditions
💻 Examples
🔹 1. if Statement
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}

Output:

You are eligible to vote
🔹 2. if...else
let age = 16;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

Output:

Not eligible to vote

👉 If the condition is true, if runs.

👉 If the condition is false, else runs.

🔹 3. else if

When we have more than two possibilities, we can use else if.

let marks = 75;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else {
    console.log("Fail");
}

Output:

Grade A
🔹 4. Comparison Operators

I also practiced comparison operators:

>     Greater than
<     Less than
>=    Greater than or equal to
<=    Less than or equal to
==    Equal to
===   Strictly equal to
!=    Not equal to
!==   Strictly not equal to

Example:

let a = 10;

console.log(a > 5);   // true
console.log(a < 5);   // false
console.log(a === 10); // true
🔹 5. Using && — AND

Both conditions must be true.

let age = 22;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Entry allowed");
}

Output:

Entry allowed
🔹 6. Using || — OR

At least one condition must be true.

let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend");
}

Output:

Weekend
🧠 Quick Revision
Concept	Purpose
if	Checks a condition
else	Runs when if is false
else if	Checks another condition
>	Greater than
<	Less than
>=	Greater/equal
<=	Less/equal
===	Strict equality
&&	AND
`	
🎯 Practice for Today
Check whether a number is positive or negative.
Check whether a person is eligible to vote.
Check whether a number is even or odd.
Create a program to calculate grades from marks.
Find the largest of two numbers.
Find the largest of three numbers.
Check whether a year is a leap year.
Create a simple login condition using username and password.

Day 8 complete! ✅
Learning → Practicing → Improving 🚀

#JavaScript #100DaysOfCode #WebDevelopment #CodingJourney #JavaScriptLearning #Programming #LearningToCode #DeveloperJourney
Day 9 — JavaScript Ternary Operator ? : 🚀

Welcome to Day 9 of my JavaScript learning journey! 💻

Today, I learned about the Ternary Operator, which is a shorter and cleaner way to write a simple if...else condition.

📚 What I Learned

Today I learned about:

Ternary Operator ? :
Condition
? for the true result
: for the false result
Using Ternary with variables
Using Ternary with comparison operators
Nested Ternary Operator
🔹 1. Basic Ternary Operator

Instead of writing:

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

We can write:

let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

Output:

Eligible
🧠 Remember the structure
condition ? trueValue : falseValue;

Think:

          condition
              ↓
        age >= 18
        /        \
     TRUE       FALSE
       ↓           ↓
 "Eligible"  "Not Eligible"
🔹 2. Even or Odd
let number = 10;

let result = number % 2 === 0 ? "Even" : "Odd";

console.log(result);

Output:

Even

Here:

number % 2 === 0

is the condition.

If it is true → "Even"
If it is false → "Odd"

🔹 3. Positive or Negative
let number = -5;

let result = number >= 0 ? "Positive" : "Negative";

console.log(result);

Output:

Negative
🔹 4. Pass or Fail
let marks = 65;

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);

Output:

Pass
🔹 5. Ternary with console.log()

We can also directly print the result:

let age = 16;

console.log(age >= 18 ? "Adult" : "Minor");

Output:

Minor
🔹 6. Ternary with Three Conditions

Sometimes we need more than two possibilities.

let marks = 85;

let grade = marks >= 90
    ? "A+"
    : marks >= 75
    ? "A"
    : marks >= 60
    ? "B"
    : "C";

console.log(grade);

Output:

A

This is called a nested ternary.

⚠️ It is useful for simple cases, but too many nested ternaries can make code difficult to read.

🧠 if...else vs Ternary
if...else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
Ternary
console.log(age >= 18 ? "Adult" : "Minor");

Both can give the same result.

⭐ Easy Trick to Remember
?  → What happens if TRUE?

:  → What happens if FALSE?

So:

age >= 18 ? "Adult" : "Minor"

means:

Is age >= 18?
YES → Adult
NO → Minor

🎯 Practice for Today
Check whether a number is even or odd.
Check whether a person is eligible to vote.
Check whether a number is positive or negative.
Check whether marks are pass or fail.
Find the greater of two numbers using ternary.
Check whether a person is an adult or minor.
Check whether a number is zero or non-zero.
Create a simple grade system using nested ternary.

Day 9 complete! ✅

Learning → Practicing → Building 🚀

#JavaScript #100DaysOfCode #JavaScriptLearning #CodingJourney #WebDevelopment #Programming #LearningToCode #DeveloperJourney
Day 10 — JavaScript switch Statement 🔀

Welcome to Day 10 of my JavaScript learning journey! 🚀

Today, I learned about the switch statement in JavaScript. It is useful when we need to compare one value with multiple possible cases.

📚 What I Learned

Today I learned about:

switch
case
break
default
Multiple cases
Difference between if...else and switch
🔹 1. Basic switch
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}

Output:

Monday
🧠 How it works
switch(day)
     ↓
case 1 → Monday
case 2 → Tuesday
case 3 → Wednesday
default → Invalid day

JavaScript checks the value of day and finds the matching case.

🔹 2. Why do we use break?

break tells JavaScript to stop the switch statement after finding the matching case.

let number = 2;

switch (number) {
    case 1:
        console.log("One");
        break;

    case 2:
        console.log("Two");
        break;

    case 3:
        console.log("Three");
        break;
}

Output:

Two

Without break, JavaScript can continue executing the following cases.

⭐ Remember:
case   → What value are we checking?
break  → Stop here
default → If nothing matches
🔹 3. Using default

default runs when none of the cases match.

let day = 8;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

Output:

Invalid day
🔹 4. Multiple Cases with the Same Result

We can use multiple cases when different values should produce the same output.

let day = "Sunday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}

Output:

Weekend
🔹 5. Simple Calculator Using switch
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid operator");
}

Output:

15
🆚 if...else vs switch
if...else

Good when we are checking different conditions:

if (marks >= 90) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
}
switch

Good when we are checking one value against different fixed values:

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;
}
🧠 Easy way to remember

if = condition checking
switch = value matching

🎯 Practice for Day 10
Print the day of the week using switch.
Print the month name using month number.
Create a calculator using switch.
Create a program for traffic lights:
Red → Stop
Yellow → Wait
Green → Go
Check whether a day is a weekday or weekend.
Create a simple menu using switch.
Create a program to display grades using switch.

Day 10 complete! ✅

10 Days of JavaScript completed! 🎯
Learning → Practicing → Improving 🚀

#JavaScript #100DaysOfCode #JavaScriptLearning #CodingJourney #WebDevelopment #Programming #LearningToCode #DeveloperJourney
# 📅 Day 11 — JavaScript Functions 🚀

Welcome to **Day 11 of my JavaScript learning journey!**

Today, I started learning one of the most important concepts in JavaScript — **Functions**.

Functions help us write reusable code instead of writing the same code again and again.

---

## 📚 What is a Function?

A function is a block of code designed to perform a particular task.

### Basic Syntax

```javascript
function functionName() {
    // code
}
```

Example:

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

### Output:

```text
Hello!
```

Here:

* `function` → keyword
* `greet` → function name
* `()` → parameters are written here
* `{}` → function body
* `greet()` → function call

---

# 📌 1. Function Declaration

```javascript
function add() {
    console.log(10 + 20);
}

add();
```

Output:

```text
30
```

A function does not execute just because we create it.

We need to **call the function**.

```javascript
add();
```

---

# 📌 2. Function Parameters

Parameters allow us to pass information into a function.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Anjali");
```

Output:

```text
Hello Anjali
```

Here:

```text
name → parameter
"Anjali" → argument
```

### Easy way to remember:

**Parameter = variable inside function**

**Argument = actual value passed to function**

---

# 📌 3. Multiple Parameters

A function can have multiple parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

---

# 📌 4. Return Statement

`return` sends a value back from the function.

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Important:

`console.log()` → displays something

`return` → sends a value back

---

# 📌 5. Why Do We Use return?

Without `return`:

```javascript
function add(a, b) {
    console.log(a + b);
}
```

The function prints the result but doesn't give the result back to us.

With `return`:

```javascript
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
```

Now we can store and reuse the result.

---

# 📌 6. Function with No Parameters

```javascript
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
```

---

# 📌 7. Function with Parameters

```javascript
function square(num) {
    return num * num;
}

console.log(square(5));
```

Output:

```text
25
```

---

# 📌 8. Function Expression

A function can also be stored inside a variable.

```javascript
let add = function(a, b) {
    return a + b;
};

console.log(add(5, 10));
```

Output:

```text
15
```

---

# 📌 9. Arrow Function

Arrow functions provide a shorter way to write functions.

### Normal function:

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow function:

```javascript
let add = (a, b) => {
    return a + b;
};
```

We can make it even shorter:

```javascript
let add = (a, b) => a + b;
```

---

# 📌 10. Arrow Function with One Parameter

```javascript
let square = num => num * num;

console.log(square(5));
```

Output:

```text
25
```

Parentheses around a single parameter are optional:

```javascript
num => num * num
```

is the same as:

```javascript
(num) => num * num
```

---

# 📌 11. Default Parameters

We can provide a default value for a parameter.

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
```

Output:

```text
Hello Guest
```

If we provide a value:

```javascript
greet("Anjali");
```

Output:

```text
Hello Anjali
```

---

# 📌 12. Function for Even/Odd

```javascript
function checkEvenOdd(num) {
    if(num % 2 === 0) {
        return "Even";
    } else {
        # 📅 Day 12 — Even & Odd Numbers Using Functions

Today, I practiced using **JavaScript functions with conditions** by creating a program to check whether a number is **Even or Odd**. 🚀

## 📚 What I Learned

Today I learned:

* How to create a function
* How to pass a number as a parameter
* How to call a function
* Using the `%` (modulus) operator
* Using `if...else` inside a function
* Using `return` inside a function
* Using the ternary operator
* Understanding the difference between a parameter and an argument

## 💻 Example 1 — Using if...else

```javascript
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(10);
checkEvenOdd(7);
```

### Output

```text
Even
Odd
```

## 💻 Example 2 — Using return

```javascript
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(15));
```

### Output

```text
Even
Odd
```

## 💻 Example 3 — Using Ternary Operator

```javascript
function checkEvenOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(12));
```

### Output

```text
Even
```

## 🧠 Important Concept

The `%` operator gives the **remainder** after division.

```text
10 % 2 = 0  → Even
7 % 2 = 1   → Odd
20 % 2 = 0  → Even
15 % 2 = 1  → Odd
```

So the basic logic is:

```javascript
number % 2 === 0
```

If this condition is `true`, the number is **Even**. Otherwise, it is **Odd**.

## 🔑 Function Concepts

```javascript
function checkEvenOdd(number)
```

* `checkEvenOdd` → Function name
* `number` → Parameter
* `checkEvenOdd(10)` → Function call
* `10` → Argument

## 📝 Practice Problems

I practiced these problems:

1. Check whether a number is even or odd.
2. Check multiple numbers using the same function.
3. Return `"Even"` or `"Odd"` from a function.
4. Find even and odd numbers from an array.
5. Count the number of even and odd elements in an array.

## 🚀 Day 12 Summary

Today I strengthened my understanding of **functions + conditions + operators** in JavaScript.

I learned that functions help me **reuse the same logic with different inputs**, which is an important concept for writing clean and efficient code.

**Next Goal:** Practice functions with **arrays and loops**. 💻🔥

```
# 📅 Day 13 — While Loops, Break & Continue

Today, I combined my learning of **while loops** with **break and continue statements** in JavaScript. 🚀

I learned how to repeat code using `while` and `do...while`, and how to control the execution of loops using `break` and `continue`.

## 📚 What I Learned

Today I practiced:

* `while` loop
* `do...while` loop
* Loop conditions
* Updating loop variables
* `break` statement
* `continue` statement
* Even and odd numbers using loops
* Number-based problems using `while`
* Avoiding infinite loops

---

## 1️⃣ While Loop

A `while` loop executes a block of code as long as the condition is `true`.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
5
```

---

## 2️⃣ Printing Even Numbers

```javascript
let i = 1;

while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}
```

### Output

```text
2
4
6
8
10
12
14
16
18
20
```

---

## 3️⃣ Do...While Loop

A `do...while` loop executes the code **at least once** before checking the condition.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

### Output

```text
1
2
3
4
5
```

---

## 4️⃣ Break Statement

`break` is used to **completely stop the loop**.

```javascript
let i = 1;

while (i <= 10) {
    if (i === 5) {
        break;
    }

    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
```

When `i` becomes `5`, `break` stops the loop.

---

## 5️⃣ Continue Statement

`continue` is used to **skip the current iteration** and continue with the next one.

```javascript
let i = 0;

while (i < 10) {
    i++;

    if (i === 5) {
        continue;
    }

    console.log(i);
}
```

### Output

```text
1
2
3
4
6
7
8
9
10
```

Here, `5` is skipped.

---

## 🧠 Break vs Continue

| Statement  | Meaning                    |
| ---------- | -------------------------- |
| `break`    | Stop the entire loop       |
| `continue` | Skip the current iteration |

### Easy way to remember:

**`break` → 🛑 Stop**

**`continue` → ⏭️ Skip**

---

## 💻 Number-Based Practice

I practiced solving problems using `while` loops:

1. Print numbers from 1 to 10.
2. Print numbers from 10 to 1.
3. Print even numbers from 1 to 20.
4. Print odd numbers from 1 to 20.
5. Find the sum of numbers from 1 to 100.
6. Print the multiplication table of a number.
7. Count the digits of a number.
8. Find the sum of digits.
9. Reverse a number.
10. Check whether a number is a palindrome.
11. Find the factorial of a number.
12. Find the largest digit.
13. Find the smallest digit.
14. Count even and odd digits.
15. Check whether a number is prime.

---

## ⚠️ Important: Avoid Infinite Loops

Always remember to update the loop variable.

❌ Incorrect:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

The value of `i` never changes, so the loop continues forever.

✅ Correct:

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## 🔑 Key Takeaways

Today I learned that:

* `while` repeats code while a condition is true.
* `do...while` executes at least once.
* `break` completely stops a loop.
* `continue` skips one iteration.
* Loop variables must be updated to avoid infinite loops.
* `%` can be used with loops to find even and odd numbers.
* `while` loops are useful for number-based programming problems.

## 🚀 Day 13 Summary

Today I strengthened my understanding of **loops and loop control** in JavaScript.

I practiced using `while`, `do...while`, `break`, and `continue` and solved several number-based coding problems.

**Next Goal:** Learn **Nested Loops and Patterns**. 💻🔥
Day 14 — Nested Loops & Patterns 🔁
🎯 What I Learned

Today I learned about nested loops in JavaScript and how they can be used to create different patterns using loops.

1. What is a Nested Loop?

A nested loop means putting one loop inside another loop.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

Here:

Outer loop → controls the rows
Inner loop → controls the columns
For every 1 iteration of the outer loop, the inner loop runs completely.
2. Basic Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= 5; j++) {
        row += "* ";
    }

    console.log(row);
}

Output:

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
3. Increasing Star Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "* ";
    }

    console.log(row);
}

Output:

*
* *
* * *
* * * *
* * * * *
4. Number Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
}

Output:

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
5. Same Number Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
}

Output:

1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
🧠 Important Logic

Remember this simple rule:

Outer loop = Rows
Inner loop = Columns

For example:

for (let i = 1; i <= 5; i++) {       // rows

    for (let j = 1; j <= i; j++) {   // columns
        // pattern
    }

}

The outer loop decides how many lines you get, while the inner loop decides what gets printed on each line.

📝 Day 14 Practice Questions
Print a 5 × 5 star pattern.
Print an increasing star triangle.
Print a decreasing star triangle.
Print numbers from 1 to 5 in triangle form.
Print the same number repeatedly in each row.
Print a multiplication-table pattern using nested loops.
Print this pattern:
1
12
123
1234
12345
Print:
*****
****
***
**
*
Print a square using numbers:
1 2 3
1 2 3
1 2 3
Create a pyramid pattern using nested loops.
🚀 Day 14 Summary

Topics covered:

Nested loops
Outer loop and inner loop
Row and column logic
Star patterns
Number patterns
Building patterns using for loops
Understanding nested-loop execution
Day 14 — Nested Loops & Patterns in JavaScript ⭐

Today I learned about Nested Loops and how to use them to create different patterns using JavaScript.

🔹 What is a Nested Loop?

A nested loop means putting one loop inside another loop.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("*");
    }
}

Here:

The outer loop controls the rows.
The inner loop controls the columns/items inside each row.
🔹 Pattern 1: Increasing Star Pattern
for (let i = 1; i <= 5; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

Output:

*
**
***
****
*****
🔹 Pattern 2: Decreasing Star Pattern
for (let i = 5; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

Output:

*****
****
***
**
*
🔹 Pattern 3: Increasing + Decreasing

This is the pattern I practiced today:

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

Output:

*
**
***
****
*****
****
***
**
*
🔹 Important Concept

The variable row is used to build the pattern one row at a time.

row += "*";

means:

row = row + "*";

For example:

row = ""
row = "*"
row = "**"
row = "***"

Then:

console.log(row);

prints the complete row.

🔹 What I Learned Today
What nested loops are
How an outer loop controls rows
How an inner loop controls columns
How to use row += "*" to create patterns
Increasing star patterns
Decreasing star patterns
Combining two loops to create complex patterns
How loop conditions control the shape of a pattern
💻 Day 14 Practice Problems
Print a square of *
Print an increasing triangle
Print a decreasing triangle
Print the pattern:
*
**
***
****
*****
****
***
**
*
Print:
1
12
123
1234
12345
Print:
1
22
333
4444
55555
Print a reverse number pattern.
Print a multiplication table using nested loops.
Print a rectangle using *.
Create a pyramid pattern using nested loops.

Day 14 takeaway: Nested loops are very important for understanding patterns, matrices, tables, and 2D arrays in JavaScript.
# 📘 JavaScript Day 15 — Arrays & Array Methods

## 🎯 Today's Goal

Learn how to work with arrays and use common JavaScript array methods.

---

## 1. What is an Array?

An **array** is used to store multiple values in a single variable.

```javascript
let numbers = [10, 20, 30, 40, 50];

console.log(numbers);
```

**Output:**

```text
[10, 20, 30, 40, 50]
```

---

## 2. Access Array Elements

Array indexing starts from **0**.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

**Output:**

```text
Apple
Mango
Banana
```

---

## 3. Change an Array Element

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

**Output:**

```text
["Apple", "Orange", "Banana"]
```

---

## 4. Array Length

`.length` tells us how many elements are in an array.

```javascript
let numbers = [10, 20, 30, 40];

console.log(numbers.length);
```

**Output:**

```text
4
```

---

# 🔹 Important Array Methods

## 5. push()

Adds an element to the **end** of an array.

```javascript
let numbers = [10, 20, 30];

numbers.push(40);

console.log(numbers);
```

**Output:**

```text
[10, 20, 30, 40]
```

---

## 6. pop()

Removes the **last** element.

```javascript
let numbers = [10, 20, 30];

numbers.pop();

console.log(numbers);
```

**Output:**

```text
[10, 20]
```

---

## 7. unshift()

Adds an element to the **beginning**.

```javascript
let numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers);
```

**Output:**

```text
[10, 20, 30, 40]
```

---

## 8. shift()

Removes the **first** element.

```javascript
let numbers = [10, 20, 30];

numbers.shift();

console.log(numbers);
```

**Output:**

```text
[20, 30]
```

---

# 🔹 Loop Through an Array

## 9. Using for Loop

```javascript
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

**Output:**

```text
10
20
30
40
50
```

---

## 10. Using Function + Loop

```javascript
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([10, 20, 30, 40, 50]);
```

### Logic

1. Function receives an array.
2. `i = 0` starts from the first element.
3. `i < arr.length` checks the array size.
4. `arr[i]` accesses each element.
5. `i++` moves to the next element.

---

# 🧠 Day 15 Practice Questions

### Basic

1. Create an array of 5 numbers.
2. Print the first element.
3. Print the last element.
4. Find the length of an array.
5. Change the second element.
6. Add an element using `push()`.
7. Remove the last element using `pop()`.
8. Add an element using `unshift()`.
9. Remove the first element using `shift()`.
10. Print every element using a `for` loop.

### Logic Building

11. Find the largest number in an array.

```javascript
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([10, 25, 5, 100, 30]));
```

**Output:**

```text
100
```

---

12. Find the smallest number.

```javascript
function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest([10, 25, 5, 100, 30]));
```

**Output:**

```text
5
```

---

13. Find the sum of all numbers.

```javascript
function findSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(findSum([10, 20, 30, 40]));
```

**Output:**

```text
100
```

---

14. Count even numbers.

```javascript
function countEven(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEven([1, 2, 4, 7, 8, 10]));
```

**Output:**

```text
4
```

---

15. Print only odd numbers.

```javascript
function printOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}

printOdd([1, 2, 3, 4, 5, 6, 7]);
```

**Output:**

```text
1
3
5
7
```

---

# 📌 Day 15 Quick Revision

| Concept      | Meaning                |
| ------------ | ---------------------- |
| Array        | Stores multiple values |
| Index        | Position of an element |
| `arr[0]`     | First element          |
| `arr.length` | Number of elements     |
| `push()`     | Add at end             |
| `pop()`      | Remove from end        |
| `unshift()`  | Add at beginning       |
| `shift()`    | Remove from beginning  |
| `for` loop   | Traverse array         |
| `arr[i]`     | Access current element |

## 🔥 Day 15 Main Focus

**Array → Index → Length → push → pop → shift → unshift → Loop → Functions + Arrays → Logic Problems**
1. map() — Transform every element

map() creates a new array by changing each element.

Example
let numbers = [1, 2, 3, 4, 5];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);
Output
[2, 4, 6, 8, 10]
Simple logic
1 → 1 × 2 → 2
2 → 2 × 2 → 4
3 → 3 × 2 → 6
...
Arrow function
let numbers = [1, 2, 3, 4, 5];

let result = numbers.map(num => num * 2);

console.log(result);

Remember: map() = change/transform every element

2. filter() — Select elements

filter() creates a new array containing only elements that satisfy a condition.

Example
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log(result);
Output
[2, 4, 6]
Arrow function
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers.filter(num => num % 2 === 0);

console.log(result);

Remember: filter() = select

3. reduce() — Get one final value

reduce() processes all elements and produces one final result.

Example: Sum
let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log(total);
Output
100
How it works
0 + 10 = 10
10 + 20 = 30
30 + 30 = 60
60 + 40 = 100

Arrow function:

let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);

Remember: reduce() = combine into one value

4. slice() — Copy/remove a portion

slice() returns a portion of an array without changing the original array.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result = fruits.slice(1, 4);

console.log(result);
console.log(fruits);
Output
["Banana", "Mango", "Orange"]

["Apple", "Banana", "Mango", "Orange", "Grapes"]

Important:

slice(start, end)

The end index is not included.

For:

["Apple", "Banana", "Mango", "Orange", "Grapes"]
    0        1        2        3        4
fruits.slice(1, 4)

takes indexes:

1, 2, 3
5. splice() — Add/remove elements

splice() changes the original array.

Remove
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);
Output
["Apple", "Orange"]

Here:

splice(1, 2)

means:

1 → starting index
2 → number of elements to remove
Add using splice()
let fruits = ["Apple", "Banana", "Orange"];

fruits.splice(2, 0, "Mango");

console.log(fruits);
Output
["Apple", "Banana", "Mango", "Orange"]

Why?

splice(2, 0, "Mango")

means:

start at index 2
remove 0 elements
add "Mango"
slice() vs splice() ⭐

This is very important for interviews.

Method	Purpose	Changes original?
map()	Transform elements	❌ No
filter()	Select elements	❌ No
reduce()	Create one final value	❌ No
slice()	Get/copy portion	❌ No
splice()	Add/remove elements	✅ Yes
Easy memory trick
MAP     → CHANGE
FILTER  → SELECT
REDUCE  → COMBINE
SLICE   → COPY
SPLICE  → CUT/ADD
🔥 One example using all 5
let numbers = [1, 2, 3, 4, 5, 6];

// map
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

// reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

// slice
let part = numbers.slice(1, 4);
console.log(part);

// splice
numbers.splice(2, 1);
console.log(numbers);

Outputs:

[2, 4, 6, 8, 10, 12]

[2, 4, 6]

21

[2, 3, 4]

[1, 2, 4, 5, 6]

For your JavaScript learning, next practice these with 15–20 coding questions: map, filter, reduce, slice, and splice, starting from beginner level and gradually moving to interview questions.

for each
JavaScript forEach() ⭐

forEach() is used when you want to run some code for every element of an array.

Basic syntax
array.forEach(function(element) {
    // code
});
1. Print every element
let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(num) {
    console.log(num);
});

Output:

10
20
30
40
50
How it works
10 → function runs
20 → function runs
30 → function runs
40 → function runs
50 → function runs
2. Using arrow function

The shorter version is:

let numbers = [10, 20, 30, 40, 50];

numbers.forEach(num => {
    console.log(num);
});
3. Add 10 to every number
let numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num + 10);
});

Output:

20
30
40

⚠️ Notice: forEach() itself does not create a new array.

If you want a new array, use map():

let result = numbers.map(num => num + 10);

console.log(result);

Output:

[20, 30, 40]
4. forEach() with index

You can get both the value and index:

let fruits = ["Apple", "Mango", "Orange"];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

Output:

0 "Apple"
1 "Mango"
2 "Orange"

The order is:

forEach((element, index) => {
    
});

You can also get the whole array:

forEach((element, index, array) => {
    
});
for loop vs forEach()
Traditional for loop
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
forEach()
let numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});

forEach() is often cleaner when you simply want to perform an action for every array element.

forEach() vs map() ⭐

This is important:

Method	Main purpose	Returns new array?
forEach()	Perform an action	❌ No
map()	Transform elements	✅ Yes
filter()	Select elements	✅ Yes
reduce()	Combine elements	❌ Usually one value
slice()	Get a portion	✅ Yes
splice()	Add/remove elements	❌ Changes original
Easy memory trick
forEach → DO something
map     → CHANGE every element
filter  → SELECT elements
reduce  → COMBINE elements
slice   → COPY a portion
splice  → ADD/REMOVE
Example to remember
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num * 2);
});

Here, forEach() is simply saying:

"Take every number and do this operation."
. Create a function that prints:

Hello JavaScript

2. Create a function that accepts a name and prints:

Hello Anjali

3. Create a function to add two numbers.

4. Create a function to subtract two numbers.

5. Create a function to multiply two numbers.

6. Create a function to divide two numbers.

7. Create a function to find the square of a number.

8. Create a function to check whether a number is positive or negative.

Intermediate

9. Create a function to check even/odd.

10. Create a function to find the largest of two numbers.

11. Create a function to find the smallest of two numbers.

12. Create a function to print numbers from 1 to n.

13. Create a function to calculate the sum from 1 to n.

14. Create a function to calculate factorial.

15. Create a function to reverse a string.

⭐ Array Practice

16. Create a function to print every element of an array.

17. Create a function to find the largest number in an array.

18. Create a function to find the smallest number in an array.

19. Create a function to calculate the sum of all array elements.

20. Create a function to count even numbers in an array.






