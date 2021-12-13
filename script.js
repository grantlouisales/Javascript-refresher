// Arrow Functions
let sum = (a, b) => {
    return a + b;
};

// Creates a object
const person = {
    firstName : "Grant",
    lastName : "Ales",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
}

// Prints out the objects attributes
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

let cars = ["Honda", "Toyota", "BMW"]
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// Adds value to list
cars[3] = "Volvo"
console.log(cars[3]);

// Prints out list
console.log(cars);

// Get length of list
console.log(cars.length);

// Add item to end of array
cars.push("Dodge");
console.log(cars);

// Creating list of numbers and adding them all together
let numbers = [1,2,3,4,5,6]
let total = 0;

// Loop through the numbers list.
numbers.forEach(function add(value) {
    total += value; 
});

console.log(total);