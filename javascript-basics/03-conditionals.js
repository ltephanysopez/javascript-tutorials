// Conditionals such as if and switch statements allow programs to make
// decisions on statements to execute based on a Boolean expression

// JavaScript has the if statement, which comes in three forms:
// if, if-else, if-else if,



// if statement
var middle = -1;
var high = 50;
var low = 1;
var current = 13;
var found = -1;

console.log(middle);
if (current < middle) {
   middle = (current - low) / 2;
   console.log(middle);
}


// if-else statement
var mi = 25; // middle
var hi = 50; // high
var lo = 1;  // low
var cu = 13; // current
var fo = -1; // found

console.log(mi);
if (cu < mi) {
   mi = (cu - lo) / 2;
   console.log(mi);
} else {
   mi = (cu + hi) / 2;
   console.log(mi);
}


// if-else if statement
var m = 25; // middle
var h = 50; // high
var l = 1;  // low
var c = 13; // current
var f = -1; // found

console.log(m);
if (c < m) {
   m = (c - l) / 2;
   console.log(m);
} else if (c > m) {
   m = (c + h) / 2;
   console.log(m);
} else {
   f = c;
   console.log(f);
}
console.log("over");


// switch statement

var monthNum = 1;
var monthName;
switch (monthNum) { 
    case "1": monthName = "January";
              break;
    case "2": monthName = "February";
              break;
    case "3": monthName = "March";
              break;
    case "4": monthName = "April";
              break;
    case "5": monthName = "May";
              break;
    case "6": monthName = "June";
              break;
    case "7": monthName = "July";
              break;
    case "8": monthName = "August";
              break;
    case "9": monthName = "September";
              break;
    case "10":monthName = "October";
              break;
    case "11":monthName = "November";
              break;
    case "12":monthName = "December";
              break;
    default: console.log("Bad input");
}

console.log(monthName);
