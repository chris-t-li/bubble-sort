function bubbleSort(arr) {
  // type your code here
  // iterate over the array arr
  // if arr[i] > arr[i+1] swap them, otherwise, keep going
  // when there are no swaps left, return the array
  let i = 0;

  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      i = 0;
    } else {
      i += 1;
    }
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("Expecting: [-2, 1, 2, 3, 4, 6, 10]");
  console.log("=>", bubbleSort([3, 2, 1, 4, 6, 10, -2]));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
