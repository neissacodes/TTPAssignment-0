function pairSum(nums, target) {
  // Insert code here;
  //Initiate a boolean flag
  let flag = false;
  //Use a nested for loop to go through the array twice and check if any values add up to the the target
  for(let i = 0; i < nums.length;  i++){
    for(let j = 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        flag = true;
      }
      else {
        flag = false;
      }
    }
  }
  return flag;
}

// Do not edit this line;
module.exports = pairSum;
