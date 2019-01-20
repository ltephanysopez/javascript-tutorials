// We can create multidimensional arrays by creating arrays of arrays

// For this example, we can create a two-dimensional array with n rows and
// one column

var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
   twod[i] = [];
}

// Second example

var grades = [[98, 79, 72], [96, 92, 91], [81, 84, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
   for (var col = 0; col < grades[row].length; ++col) {
      total += grades[row][col];
   }
   average = total / grades[row].length;
   console.log("Student " + parseInt(row+1) + " average: " + average.toFixed(2));
   total = 0;
   average = 0.0;
}

// OUTPUT
// Student 1 average: 83.00
// Student 2 average: 93.00
// Student 3 average: 84.67
