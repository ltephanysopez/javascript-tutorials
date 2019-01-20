// The two primary operations involving queues are inserting a new element
// into a queue and removing an element from a queue

// The insertion operation is called enqueue, which inserts a new element at the end
// of a queue

// The removal operation is called dequeue, which removes an element from the front
// of a queue

function Queue() {
   this.dataStore = [];
   this.enqueue = enqueue;
   this.dequeue = dequeue;
   this.front = front;
   this.back = back;
   this.toString = toString;
   this.empty = empty;
}

// Enqueue() - adds an element to the end of a queue
function enqueue(element) {
   this.dataStore.push(element);
}

// Dequeue() - removes an element from the front of a queue
function dequeue (element) {
   this.dataStore.shift();
}

// Front() - examines the front and back elements of a queue
function front() {
   return this.dataStore[0];
}

function back() {
   return this.dataStore[this.dataStore.length-1];
}

// ToString() - displays all elements in a queue
function toString() {
   var retStr = "";
   for(var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
   }
   return retStr;
}

// Empty() - determines if a queue is empty
function empty() {
   if (this.dataStore.length == 0) {
      return true;
   } else {
      return false;
   }
}

var q = new Queue();
q.enqueue("M");
q.enqueue("C");
q.enqueue("J");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());

// OUTPUT
// M
// C
// J
// C
// J
// Front of queue: C
// Back of queue: J
