function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  //Initialize a count to keep track of all numbers less than the targetted value
  let count = 0;
  //Use a foor loop to iterate through the array
  //It will compare each number to the the targetted values
  for(let i = 0; i < nums.length; i ++){
    if(nums[i] < target){
      count++;
    }
  }
  return  count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
