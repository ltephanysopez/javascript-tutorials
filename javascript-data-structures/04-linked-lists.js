// A linked list is a collectio of objects called nodes. Each node is linked to a
// successor node in the list using an object reference aka a "link"

// To create a linked list, we'll create a Node calss to represent nodes in a
// linked list, which consists of two properties: an element, which stores a node's
// data, and next, which stores a link to the next node in the linked list


function Node(element) {
   this.element = element;
   this.next = null;
}

// The LinkedList class provides functions for inserting nodes, removing nodes,
// displaying a linked list, and other functions we'll need
function LinkedList() {
   this.head = new Node("head");
   this.find = find;
   this.insert = insert;
   this.remove = remove;
   this.display = display;
   this.findPrevious = findPrevious;
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
   current.next = newNode;
}

function display() {
   var currentNode = this.head;
   while (!(currentNode.next == null)) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
   }
}

function findPrevious(item) {
   var currentNode = this.head;
   while (!(currentNode.next == null) && (currentNode.next.element != item)) {
      currentNode = currentNode.next;
   }
   return currentNode;
}

function remove(item) {
   var previousNode = this.findPrevious(item);
   if (!(previosNode.next == null)) {
      previousNode.next = previousNode.next.next;
   }
}

var cities = new LinkedList();
cities.insert("A", "head");
cities.insert("B", "A");
cities.insert("C", "B");
cities.display();
cities.remove("C");
cities.display();

// OUTPUT
// A
// B
// C
// A
// B
