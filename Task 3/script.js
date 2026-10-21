// Part-1. Functions and Parameters - 5 Questions

// 1. Create a function welcome() that prints "Welcome to JavaScript".

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// 2. Create a function studentDetails(name, age, cgpa).
// Call it with two different students.

function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Pradeep", 22, 8.5);
studentDetails("Priya", 24, 9.0);


// 3. Create a function calculateFee(fee) that returns the fee.
// Store the returned value in a variable and print it.

function calculateFee(fee) {
    return fee;
}

var studentFee = calculateFee(50000);
console.log(studentFee);


// 4. Calculate a discount on a fee of ₹200,000 and print the final fee.

function discount(percent) {
    var fee = 200000;
    var discountAmount = fee * percent / 100;
    var finalFee = fee - discountAmount;

    console.log("Original Fee:", fee);
    console.log("Discount:", discountAmount);
    console.log("Final Fee:", finalFee);
}

discount(10);


// 5. Create a function studentForm(name, age, disability = "no").
// Call it three times, including once without disability.

function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
}

studentForm("Pradeep", 22, "no");
studentForm("Priya", 24, "yes");
studentForm("Arun", 23);

// Part-2. Functions Types and Scope - 5 Questions

// 1. Create a named function that accepts a message and prints it.

function displayMessage(message) {
    console.log(message);
}

displayMessage("Hello JavaScript");


// 2. Create an anonymous function and store it in a variable.
// Pass a name to it and print the name.

var printName = function(name) {
    console.log(name);
};

printName("Pradeep");


// 3. Create an arrow function that accepts a number and prints it.

var printNumber = (number) => {
    console.log(number);
};

printNumber(100);


// 4. Check var, let, and const inside and outside an if block.

function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block:", a);
        console.log("Inside block:", b);
        console.log("Inside block:", c);
    }

    console.log("Outside block:", a);

    // console.log(b); // ReferenceError
    // console.log(c); // ReferenceError
}

checkScope();


// 5. Predict the output.

console.log(value); // undefined
var value = 10;

console.log(value); // 10

// Part-3. Callback and Higher order Functions - 6 Questions

// 1. Pass second() as a callback to first().

function first(callback) {
    console.log("First function");
    callback();
}

function second() {
    console.log("Second function");
}

first(second);


// 2. Create add(callback, a, b).
// Print the sum, then call the callback with two numbers.

function add(callback, a, b) {
    console.log("Sum:", a + b);
    callback(20, 10);
}

function showNumbers(x, y) {
    console.log("Callback numbers:", x, y);
}

add(showNumbers, 5, 10);


// 3. Create a sub() arrow function and pass it as a callback to add().

var sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};

function addNumbers(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}

addNumbers(sub, 20, 5);


// 4. Create multiply(callback, a, b).

function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}

function afterMultiply() {
    console.log("Multiplication completed");
}

multiply(afterMultiply, 5, 4);


// 5. Create divide(num1, num2) and pass it as a callback.

function divide(num1, num2) {
    if (num2 !== 0) {
        console.log("Division:", num1 / num2);
    } else {
        console.log("Cannot divide by zero");
    }
}

function calculate(callback, a, b) {
    callback(a, b);
}

calculate(divide, 20, 4);


// 6. Create a higher-order function that accepts a callback
// and calls it with a student's name.

function studentCallback(callback) {
    callback("Pradeep");
}

function displayStudent(name) {
    console.log("Student Name:", name);
}

studentCallback(displayStudent);

// Part-4. General Functions - 5 Questions

// 1. Create a generator function that yields three messages.

function* cashback() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

var result = cashback();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);


// 2. Call .next() three times and observe returned values.

function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

var generator = numbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


// 3. Yield five discount messages and print them using for-of.

function* discounts() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "No discount";
}

for (var message of discounts()) {
    console.log(message);
}


// 4. Yield three student names and display them using for-of.

function* studentNames() {
    yield "Pradeep";
    yield "Priya";
    yield "Arun";
}

for (var name of studentNames()) {
    console.log(name);
}


// 5. Create a generator with four yield statements.
// Check the done property after values are consumed.

function* fourValues() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

var gen = fourValues();

console.log(gen.next()); // done: false
console.log(gen.next()); // done: false
console.log(gen.next()); // done: false
console.log(gen.next()); // done: false
console.log(gen.next()); // done: true

// Part-5. Currying and Uncurrying - 5 Questions

// 1. Create a normal function add(a, b, c).

function add(a, b, c) {
    console.log("Sum:", a + b + c);
}

add(5, 10, 15);


// 2. Convert add() into a curried function using nested functions.

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(5)(10)(15));


// 3. Call a curried function using (5)(10)(15).

function calculate(a) {
    return (b) => {
        return (c) => {
            console.log(a + b + c);
        };
    };
}

calculate(5)(10)(15);


// 4. Calculate total discounted price using currying.
// Parameters: price, discount percentage, quantity.

function totalPrice(price) {
    return function(discountPercent) {
        return function(quantity) {
            var discountedPrice =
                price - (price * discountPercent / 100);

            return discountedPrice * quantity;
        };
    };
}

var total = totalPrice(1000)(10)(3);
console.log("Total discounted price:", total);


// 5. Compare normal and curried functions.

function normalCalculate(a, b, c) {
    return a + b + c;
}

function curriedCalculate(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log("Normal result:", normalCalculate(5, 10, 15));
console.log("Curried result:", curriedCalculate(5)(10)(15));

// Part-6. IIFE, Return and Mixed Practice - 4 Questions

// 1. Create an IIFE that accepts a product name and discount percentage.
// Display a sale message using a template string.

(function(productName, discountPercent) {
    console.log(
        `${productName} is available at ${discountPercent}% discount!`
    );
})("Laptop", 20);


// 2. Create a function that returns a number.
// Store the returned value in a variable and print it.

function getNumber() {
    return 100;
}

var number = getNumber();
console.log(number);


// 3. Create a function that accepts student's marks and returns them.
// Use the returned value in another variable.

function getMarks(marks) {
    return marks;
}

var studentMarks = getMarks(85);
console.log("Student Marks:", studentMarks);


// 4. Student fee calculator using a default parameter,
// a callback function for discount, and a return value.

function calculateStudentFee(
    fee = 50000,
    callback = (amount) => amount * 10 / 100
) {
    var discountAmount = callback(fee);
    var finalFee = fee - discountAmount;

    return finalFee;
}

function calculateDiscount(fee) {
    return fee * 10 / 100;
}

var finalFee = calculateStudentFee(50000, calculateDiscount);

console.log("Original Fee:", 50000);
console.log("Discount:", calculateDiscount(50000));
console.log("Final Fee:", finalFee);

// Use the default fee and default discount callback.
console.log("Default Final Fee:", calculateStudentFee());



