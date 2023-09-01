function calculateTotalBarLengthReq(width, height, maxRowHeightPercentage, ironBarThickness) {
    // Calculate the maximum row height in cm based on the percentage
    const maxRowHeight = (maxRowHeightPercentage / 100) * height;
  
    // Check if the maximum row height is less than twice the iron bar thickness
    if (maxRowHeight < 2 * ironBarThickness) {
      return "Symmetrical design not possible with given parameters.";
    }
  
    // Calculate the number of rows in the gate
    const numRows = Math.floor(height / maxRowHeight);
  
    // Calculate the length of iron bars for empty rows
    const emptyRowsLength = numRows * width * ironBarThickness;
  
    // Calculate the length of iron bars for rows filled with circles
    const circleRowsLength = (numRows - 1) * width * ironBarThickness;
  
    // Calculate the total bar length requirement
    const totalBarLength = emptyRowsLength + circleRowsLength;
  
    return `Total bar length requirement = ${totalBarLength.toFixed(2)}cm.`;
  }
  
  // Example usage:
  const ironBarThickness = 10; // Thickness of the iron bars in cm
  console.log(calculateTotalBarLengthReq(500, 500, 20, ironBarThickness));
  console.log(calculateTotalBarLengthReq(100, 100, 20, ironBarThickness));
  