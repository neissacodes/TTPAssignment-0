function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  //Initiate an array to hold the elements
  let array = [];
  //Initiate a set to hold the distinct elements
  let set = new Set();

  //Adding the arguments to the array using a for loop
  for(let i = 0; i < arguments.length; i++){
    array.push(arguments[i]);
  }

  //Add the array elements to a set using a nested for loop
  for(let j = 0; j < array.length; j++){
    for(var element of array[j]){
      set.add(element);
    }

  }
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
