function calculateMealPlan(mealsPerDay, totalCaloriesPerDay, maxCalorieDifference) {
    // Define food items and their calorie values
    const foodItems = [
      { name: "Food Item A", calories: 239 },
      { name: "Food Item B", calories: 130 },
      { name: "Food Item C", calories: 155 },
      { name: "Food Item D", calories: 200 },
      { name: "Food Item E", calories: 20 },
      { name: "Food Item F", calories: 500 },
      { name: "Food Item G", calories: 100 },
      { name: "Food Item H", calories: 50 },
      { name: "Food Item I", calories: 10 },
    ];
  
    // Function to generate a random meal
    function generateRandomMeal() {
      const meal = [];
      const usedIndices = new Set();
  
      while (meal.length < foodItems.length) {
        const randomIndex = Math.floor(Math.random() * foodItems.length);
  
        if (!usedIndices.has(randomIndex)) {
          meal.push(foodItems[randomIndex]);
          usedIndices.add(randomIndex);
        }
      }
  
      return meal;
    }
  
    // Function to check if a meal plan meets the calorie requirements
    function isValidMealPlan(mealPlan, totalCaloriesPerDay, maxCalorieDifference) {
      const totalCalories = mealPlan.reduce((sum, foodItem) => sum + foodItem.calories, 0);
      return Math.abs(totalCalories - totalCaloriesPerDay) <= maxCalorieDifference;
    }
  
    // Generate meal plans until a valid one is found
    let attempts = 0;
    while (attempts < 10000) {
      const mealPlan = [];
      let remainingCalories = totalCaloriesPerDay;
  
      for (let i = 0; i < mealsPerDay; i++) {
        const meal = generateRandomMeal();
        mealPlan.push(meal);
        remainingCalories -= meal.reduce((sum, foodItem) => sum + foodItem.calories, 0);
      }
  
      if (isValidMealPlan(mealPlan.flat(), totalCaloriesPerDay, maxCalorieDifference)) {
        let result = "";
        for (let i = 0; i < mealPlan.length; i++) {
          result += `Meal ${i + 1}: ${mealPlan[i].map(item => item.name).join(", ")}. `;
        }
        return result.trim();
      }
  
      attempts++;
    }
  
    return "Unable to generate a meal plan.";
  }
  
  // Example usage:
  console.log(calculateMealPlan(2, 1000, 100));  // Example 1
  console.log(calculateMealPlan(1, 600, 20));   // Example 2
  console.log(calculateMealPlan(2, 600, 20));   // Example 3
  