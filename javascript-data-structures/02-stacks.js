// A stack is a list of elements that are accessible only from one end of the list,
// which is called the top

// Stacks are known as a LIFO (last in, first out) data structure
// To build a stack, we'll use an array in our implementation

function Stack() {
   this.dataStore = [];
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.length = length;
   this.clear = clear;
}

// Push() - pushes a new element onto a stack
function push(element) {
   this.dataStore[this.top++] = element;
}

// Pop() - returns the element at the top position of the stack, then decrements
// the top variable
function pop() {
   return this.dataStore[--this.top];
}

// Peek() -  returns the top element of the stac by accessing the element
// at the top position of the array
function peek() {
   return this.dataStore[this.top-1];
}

// Length() - returns value by returning the value of the top
function length() {
   return this.top;
}

// Clear() - clears stack by setting the top variable to 0
function clear() {
   this.top = 0;
}

var s = new Stack();
s.push("D");
s.push("R");
s.push("B");
console.log("length: " + s.length());
console.log(s.peek());

var poped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("C");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("B");
console.log(s.peek());


// OUTPUT
// length: 3
// B
// The popped element is: B
// R
// C
// length: 0
// undefined
// B
