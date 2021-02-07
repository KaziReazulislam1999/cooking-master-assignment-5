const inputValue = document.getElementById("inputValue").value;
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));

  const displayMeals = (meals) => {
    const menueItemsDiv = document.getElementById("menue-items");

    meals.forEach((meal) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      const items = `
        <img src="${meal.strMealThumb}" width="300px" >
          <h3 class="items-heading">${meal.strMeal}</h3>
      `;
      itemDiv.innerHTML = items;

      menueItemsDiv.appendChild(itemDiv);
    });

    // for (let i = 0; i < meals.length; i++) {
    //   const meal = meals[i];

    //   const itemDiv = document.createElement("div");
    //   itemDiv.className = "item";
    //   const items = `
    //   <img src="${meal.strMealThumb}" width="300px" >
    //     <h3 class="items-heading">${meal.strMeal}</h3>
    // `;
    //   itemDiv.innerHTML = items;

    //   menueItemsDiv.appendChild(itemDiv);
    // }
  };
});
