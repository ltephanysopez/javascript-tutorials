// Hashing is a technique for storing data in sucha  way that the data can be inserted and retrieved very quickly
// Hashing uses a data structure called a hash table
// The has table data structure is designed around an array


function HashTable() {
   this.table = new array(137);
   this.simpleHash = simpleHash;
   this.betterHash = betterHash;
   this.showDistro = showDistro;
   this.put = put;
}
function put(data) {
   var pos = this.betterHash(data);
   this.table[pos] = data;
}
function simpleHash(data) {
   var total = 0;
   for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
   }
   console.log("Hash value: " + data + " -> " + total);
   return total % this.table.length;
}
function showDistro() {
   var n = 0;
   for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
         console.log(i + ": " + this.table[i]);
      }
   }
}
function betterHash(string) {
   const H = 37;
   var total = 0;
   for (var i = 0; i < string.length; ++i) {
      total += H * total + string.charCodeAt(i);
   }
   total = total % this.table.length;
   if (total < 0) {
      total += this.table.length-1;
   }
   return parseInt(total);
}

var someLetters = ["D", "J", "A", "R", "C", "M", "B", "X", "J"];
var hTable = new HashTable();
for (var i = 0; i < someLetters.length; ++i) {
   hTable.put(someLetters[i]);
}
hTable.showDistro();


// The code above produces the following result
// 65: A
// 66: B
// 67: C
// 68: D
// 74: J
// 77: M
// 82: R
// 88: X
