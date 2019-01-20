// A list is an ordered sequence of data where each data item
// stored in a list is called an element

// We can append element to the end of a list or insert an element into
// a list after an existing element or at the beginning of a list

// Elements are deleted from a list using a remove operation

// The getElement() operation displays the value of the current element

// We can move from one element of a list to the next element using the next() operation
// and move backwards using the prev() operation

function List() {
   this.listSize = 0;
   this.pos = 0;
   this.listData = []; // initializes an empty array to store list elements
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.prev = prev;
   this.next = next;
   this.length = length;
   this.currentPosition = currentPosition;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
   this.contains = contains;
}

// Append() - appends a new element onto the list at the next
// available position. After the element is appended, listSize is incremented
// by 1
function append(element) {
   this.listData[this.listSize++] = element;
}

// Find() - finds an element to remove by iterating through listData
// looking for the specified element
function find(element) {
   for(var i = 0; i < this.listData.length; ++i) {
      if (this.listData[i] == element) {
         return i;
      }
   }
   return -1;
}

// Remove() - uses position returned by find() to splice the listData at the given place
// Returns true if an element is removed, and false otherwise
function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.listData.splice(foundAt, 1);
      --this.listSize;
      return true;
   }
   return false;
}

// Length() - determines the number of elements in a list
function length() {
   return this.listSize;
}


// toString() - retrieves a list's elements
function toString() {
   return this.listData;
}

// Insert() - inserting an element into a list
// The difference between append and insert is the location of where the
// value will be added to the list
function insert(element, after) {
   var insertPos = this.find(after);
   if (insertPos > -1) {
      this.listData.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
   }
   return false;
}

// Clear() - removes all elements from a list
function clear() {
   delete this.listData;
   this.listData = [];
   this.listSize = this.post = 0;
}

// Contains() - deteremines if a given value is in a list
function contains(element) {
   for(var i = 0; i < this.listData.length; ++i) {
      if (this.listData[i] == element) {
         return true;
      }
   }
   return false;
}

// Front() - traversing a list
function front() {
   this.pos = 0;
}

function end() {
   this.pos = this.listSize - 1;
}

function prev() {
   if (this.pos > 0) {
      --this.pos;
   }
}

function next() {
   if (this.pos < this.listSize - 1) {
      ++this.post;
   }
}

function currentPosition() {
   return this.post;
}

function moveTo(position) {
   this.pos = position;
}

function getElement() {
   return this.listData[this.pos];
}

var names = new List();
names.append("C");
names.append("R");
names.append("B");
console.log(names.toString());
names.append("R");
console.log(names.toString());
names.append("C");
names.append("R");
names.append("C");
names.append("J");
names.append("B");
names.append("D");

// Move to the first element of list and display
names.front();
console.log(names.getElement());

// Move forward by one and display element's value
names.next();
console.log(names.getElement());

// Move forward twice, backward once, do the charlie brown, and display
// the current element to demonstrate prev() operation
names.next();
names.next();
names.prev();
console.log(names.getElement());


// OUTPUT
// 'C', 'R', 'B'
// 'C', 'B'
// C
// B
// C
