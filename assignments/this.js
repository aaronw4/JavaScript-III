/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding
Here the .this refers to an object that always exists in the global scope.

* 2. Implicit Binding
Here the .this refers to the name of the object that the .this occurs inside of.

* 3. New binding
Here the .this refers to the name of the object being created by the constructor function.

* 4. Explicit binding
Here the .this refers to the name of the object being called by the methods call, apply, or bind.

* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
let info = {
    name: "Aaron",
    location: "Oakland",
    statement: function() {
        console.log(this.name + ' lives in ' + this.location);
    }
};
info.statement();

// Principle 3
// code example for New Binding
function FoodOrder(main, side, drink) {
    this.main = main;
    this.side = side;
    this.drink = drink;
    this.order = function() {
        console.log('You ordered a ' + this.main + ' with a side of ' + this.side + ' and a ' +  this.drink);
    }
}
let table1 = new FoodOrder('hamburger', 'fries', 'beer');
table1.order();

// Principle 4
// code example for Explicit Binding
let table1Confirm = Object.values(table1);
let confirm = function(main, side, drink) {
    console.log('I have a ' + main + ', ' + side + ', and a ' + drink + ' for ' + this.name);
};
console.log(confirm.apply(info, table1Confirm));