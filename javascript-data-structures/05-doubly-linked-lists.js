// A doubly linked list is a linked list that allows us to iterate list items
// back and forth with a new attribute in our Node class, "previous"

function Node(element) {
   this.element = element;
   this.next = null;
   this.previous = null;
}

function DoublyLL() {
   this.head = new Node("head");
   this.find = find;
   this.insert = insert;
   this.remove = remove;
   this.display = display;
   this.findLast = findLast;
   this.dispReverse = dispReverse;
}

function dispReverse() {
   var currentNode = this.head;
   currentNode = this.findLast();
   while(!(currentNode.previous == null)) {
      console.log(currentNode.element);
      currentNode = currentNode.previous;
   }
}

function findlast() {
   var currentNode = this.head;
   while (!(currentNode.next == null)) {
      currentNode = currentNode.next;
   }
   return currentNode;
}

function remove(item) {
   var currentNode = this.find(item);
   if (!(currentNode.next == null)) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      currentNode.next = null;
      currentNode.previous = null;
   }
}

function display() {
   var currentNode = this.head;
   while (!(currentNode.next == null)) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
   }
}

function find(item) {
   var currentNode = this.head;
   while (currentNode.element != item) {
      currentNode = currentNode.next;
   }
   return currentNode;
}

function insert(newElement, item) {
   var newNode = new Node(newElement);
   var current = this.find(item);
   newNode.next = current.next;
   newNode.previous = current;
   current.next = newNode;
}

var citites = new DoublyLL();
cities.insert("C", "head");
cities.insert("R", "C");
cities.insert("C", "R");
cities.insert("A", "C");
cities.display();
cities.remove("C");
cities.display();
cities.dispReverse();

// OUTPUT
// C
// A
// R
// C
// A
// R
// C
// C
// R
