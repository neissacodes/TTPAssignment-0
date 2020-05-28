function sumOfMinimumAndMaximum(nums) {
  //Initialize the variable to keep track of the sum
  let sum = 0;

  //Sort the array using insertion sort then grab the first and last value of the array
  for(let i = 1; i < nums.length; i++){
    let key = nums[i];
    j = i - 1;
    while(j > 0 && nums[j] > key){
      nums[j+1] = nums[j];
      j = j-1;
    }
    nums[j+1] = key;
  sum = nums[0]  + nums[length-1];
  return sum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
