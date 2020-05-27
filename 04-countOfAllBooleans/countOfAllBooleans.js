function countOfAllBooleans(arr) {
  // Insert code here;
  //Initialize a count variable to keep track of the boolean values
  let count = 0;
  //Use a foor loop to iterate through the given array
  for(int i = 0; i < arr.length; i++){
    if(arr[i] == true || arr[i] == false){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
