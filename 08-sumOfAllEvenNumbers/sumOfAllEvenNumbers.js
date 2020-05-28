function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  //Initialize a count to keep track of all even numbers
  let count = 0;
  //Use a for loop to iterate through the array and keep track of all even numbers
  for(let i = 0; i < nums.length; i++){
    if(nums[i]%2 == 0){
      count++;
    }
  }
  count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
