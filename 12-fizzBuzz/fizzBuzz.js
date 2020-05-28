function fizzBuzz(start, end) {
  // Insert code here;
  //Initialize another array for the new values
  let resultArray = [];

  //Use a for loop to iterate through the resultArray
  for(let i = start; i <= end; i++){
    if(i%3 == 0 && i%5 == 0){
      resultArray.push("FizzBuzz");
    }
    else if(i%3 == 0){
      resultArray.push("Fizz");
    }
    else if(i%5 == 0){
      resultArray.push("Buzz");
    }
    else {
      resultArray.push(i);
    }
  }
  return resultArray;
}

// Do not edit this line;
module.exports = fizzBuzz;
