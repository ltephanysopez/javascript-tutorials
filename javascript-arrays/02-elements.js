// Data can be assigned to array elements using the [] operator in an assignment statement

// The following loop assigns the values 1 through 100 to an array
var nums = [];
for (var i = 0; i < 100; ++i) {
   nums[i] = i+1;
}

// Array elements can be accessed using the [] operator
var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log(sum);

// Accessing all the elements of an array sequentially is easier using a for loop

var num = [1, 2, 3, 5, 8, 13, 21];
var sums = 0;
for (var j = 0; j < num.length; ++j) {
   sums += num[j];
}
console.log(sums);

// Creating arrays from strings using the split() function on a string, which splits all worsd in a string by space letter

var sentence = "This is a test";
var words = sentence.split(" ");
for (var k = 0; k < words.length; ++k) {
   console.log("word " + k + ": " + words[k]);
}
