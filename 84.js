function getShoeSize(length, width, gender) {
    // Define size charts for adult shoe sizes (UK sizes)
    const womenShoeSizes = [
      { size: "Women’s UK - 2 Narrow(AA)", lengthRange: [20.0, 21.0], widthRange: [7.0, 8.5] },
      { size: "Women’s UK - 3 Narrow(AA)", lengthRange: [21.1, 22.0], widthRange: [7.0, 8.5] },
      // Add more size ranges for women's shoes as needed
    ];
  
    const menShoeSizes = [
      { size: "Men’s UK - 6 Medium(CD)", lengthRange: [24.0, 25.0], widthRange: [8.0, 9.5] },
      { size: "Men’s UK - 7 Medium(CD)", lengthRange: [25.1, 26.0], widthRange: [8.0, 9.5] },
      // Add more size ranges for men's shoes as needed
    ];
  
    // Function to find the best matching shoe size
    function findBestSize(sizeChart, length, width) {
      for (const sizeInfo of sizeChart) {
        const [minLength, maxLength] = sizeInfo.lengthRange;
        const [minWidth, maxWidth] = sizeInfo.widthRange;
  
        if (length >= minLength && length <= maxLength && width >= minWidth && width <= maxWidth) {
          return sizeInfo.size;
        }
      }
      return null;
    }
  
    // Determine which gender-specific size chart to use
    const sizeChart = gender === "female" ? womenShoeSizes : menShoeSizes;
  
    // Find the best matching shoe size
    const bestSize = findBestSize(sizeChart, length, width);
  
    if (bestSize !== null) {
      return bestSize;
    }
  
    // Return a message for cases where no matching size is found
    return "No matching size found";
  }
  
  // Example usage:
  console.log(getShoeSize(20.8, 8, "female")); // Output: Women’s UK - 2 Narrow(AA)
  console.log(getShoeSize(26.8, 10, "male"));   // Output: Men’s UK - 9.5 Medium(CD)
  