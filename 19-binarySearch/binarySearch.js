class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    //Initiare different variables
    let left = 0; //For the first value
    let right = nums.length-1; // For the right end value
    let middle;
    let flag = false; //Check if the number is found

    //Use a while loop to look through the array
    //We assume the the array is already orderred
    while(!flag && left <= right){
      middle = Math.floor(left + right / 2);
      if( nums[middle] === target){
        flag = true;
      }
      else if(nums[middle] < target){
        left = middle + 1;
      }
      else {
        right = middle - 1;
      }
    }
    return flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
