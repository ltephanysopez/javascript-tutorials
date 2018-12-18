// indexOf() searches an array to see if the argument passed to the function is found in the array

// If you have multiple occurrences of the same data in an array, the indexOf() function will always return the position of the first occurence

// If the argument is contained in the array, the function returns the index position of the argument, else, the function returns -1

var letters = ["A", "C", "R", "D", "J"];
var letter = "C";
var position = letters.indexOf(letter);

if (position >= 0) {
   console.log("Found " + letter + " at position " + position);
} else {
   console.log(letter + " not found in array.");
}

// Searching for a value with lastIndexOf

// lastIndexOf() will return the position of the last occurence of the argument in the array, or -1 if the argument isn't found

var names = ["CSS", "Stephany", "HTML", "SQL", "CSS", "Stephany", "Ruby"];
var name = "Stephany";

var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);

var lastPost = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);

// Converting Array to String

// join() and toString() functions both convert arrays to strings and contain the elements of the array delimited by commas

var namestr = names.join();
console.log(namestr);
namestr = names.toString();
console.log(namestr);

// Appending Arrays with concat()

// There are two accessor functions that create new arrays frome xistings arrays: concat() and splice()

// The concat() function puts together two or more arrays to create a new array. It is called from an existing array and its argument is another existing array

// The argument is concatenated to the end of the array calling concat()

var firstArray = ["T", "O", "O", "L"];
var secondArray = ["A", "P", "C"];
var thirdArray = cis.concat(dmp);
console.log(thirdArray);
thirdArray =  dmp.concat(firstArray);
console.log(thirdArray);
