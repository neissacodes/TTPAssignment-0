class MySolution {
  countDownSum(num) {
    // Insert code here;
    //Using recursion to sum 1 to the number given
    //If the num is 1 return 1 + the result, else return num - 1 until num == 1
    return (num == 1) ? 1 : (num + this.countDownSum(num-1));
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
