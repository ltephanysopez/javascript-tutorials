// Array Assignment
var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = i+1;
}
var samenums = nums;

// When assiging one array to another array, we are assigning a reference to the assigned array
// The two variables are pointing to the same object in memory, so when changing to the original array, that change is reflected in the other array as well.

nums[0] = 400;
console.log(samenums[0]); // displays 400

// This is called a shallow copy

// A deep copy is when array elements are stored in two separate memory locations and two array vairables are pointing to two different addresses in memory

function copy(arr1, arr2) {
   for (var j = 0; j < arr1.length; ++j) {
      arr2[j] =  arr1[j];
   }
}

copy(nums, samenums)
nums[0] = 400;
console.log(samenums[0]);
