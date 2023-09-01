function calculateStepCount(inputMatrix, outputMatrix) {
    // Flatten the matrix into a single array for easier processing
    const inputFlat = inputMatrix.flat();
    const outputFlat = outputMatrix.flat();
    // Calculate the number of elements that are in the correct position
    let numCorrect = 0;
    for (let i = 0; i < inputFlat.length; i++) {
      if (inputFlat[i] === outputFlat[i]) {
        numCorrect++;
      }
    }
    // Calculate the number of steps required to solve the puzzle
    const steps = (inputFlat.length - numCorrect) / 2;
    return steps;
  }
  
  // Test cases
  console.log(calculateStepCount([[1,2,3],[5,4,6],[7,8,9]], [[1,2,3],[4,5,6],[7,8,9]])); // Output: 1
  console.log(calculateStepCount([[1,2,3],[4,5,6],[7,8,9]], [[1,2,3],[4,5,6],[7,8,9]])); // Output: 0