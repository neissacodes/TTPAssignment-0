function titleCaseEdit(title) {
  // Insert code here;
  //Initialize an array that will containt each word of the title
  let convertedTitle = title.split(' ');
  //Use the map function to iterate through each word
  //All first characters will be be capitalized and added to the rest of the word
  .map((word) => {
    return(word.charAt(0).toUpperCase() + word.slice(1))
  }

  )
  //Join all words into a string using the join function
  .join(' ')

  return convertedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;
