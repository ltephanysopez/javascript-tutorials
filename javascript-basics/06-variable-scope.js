// The scope of a variable is where a variable's value can be accessed
// A variable's value is visible within the function of where the variable was declared,
// and it is also visible within inner/nested functions

// When a variable is defined outside of a function in the main program, the
// variable is in global scope- where they can be accessed by any part of a program

function showScope() {
   return scope;
}

var scope = "global";
console.log(scope);     // displays "global"
console.log(showScope); // displays "global"
