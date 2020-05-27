function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  //Initialize counts to keep tracks of the strings and the boolean values
  let count = 0;

  //Using a loop to iterate through the array
  for(int i = 0; i < arr.length; i++){
    //For strings
    if(arr[i] instanceof String || (arr[i] == true || arr[i] == false){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
