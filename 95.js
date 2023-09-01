function drawPattern(X) {
    if (X % 2 === 0) {
      throw new Error("X should be an odd number");
    }
  
    const pattern = [];
  
    for (let i = 0; i < X; i++) {
      const row = [];
      for (let j = 0; j < X; j++) {
        if (i < j || i + j >= X) {
          row.push("x");
        } else {
          row.push("o");
        }
      }
      pattern.push(row);
    }
  
    return pattern;
  }
  
  console.log(drawPattern(5));