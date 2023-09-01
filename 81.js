function getTotalPrice(items, maxWeight, maxSize, n) {
    // Create a table to store the maximum total price for each subproblem
    const dp = new Array(n + 1).fill(null).map(() => new Array(maxWeight + 1).fill(0));
  
    // Iterate through each item and calculate the maximum price for each subproblem
    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= maxWeight; w++) {
        if (items[i - 1].weight <= w && items[i - 1].size <= maxSize) {
          // Include the current item in the knapsack
          const includeItem = items[i - 1].price + dp[i - 1][w - items[i - 1].weight];
  
          // Exclude the current item from the knapsack
          const excludeItem = dp[i - 1][w];
  
          // Update the maximum total price for the current subproblem
          dp[i][w] = Math.max(includeItem, excludeItem);
        } else {
          // If the current item cannot be included, keep the previous value
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    // The maximum total price is stored in dp[n][maxWeight]
    return dp[n][maxWeight];
  }
  
  // Example usage:
  const items = [
    { weight: 10, price: 20, size: 30 },
    { weight: 15, price: 25, size: 35 },
    { weight: 20, price: 30, size: 40 },
    { weight: 25, price: 35, size: 40 },
  ];
  const maxWeight1 = 50;
  const maxSize1 = 50;
  const maxWeight2 = 30;
  const maxSize2 = 100;
  
  console.log(getTotalPrice(items, maxWeight1, maxSize1, items.length)); // Output: 35
  console.log(getTotalPrice(items, maxWeight2, maxSize2, items.length)); // Output: 50
  