const inputValue = document.getElementById("inputValue").value;
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", function () {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));

  const displayMeals = (meals) => {
    const menueItemsDiv = document.getElementById("menue-items");
    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      const itemDiv = document.createElement("div");

      itemDiv.innerText = meal.strMeal;
      menueItemsDiv.appendChild(itemDiv);

      const name = document.createElement("h3");
      name.innerText = meal.strMeal;
      itemDiv.appendChild(name);

      menueItemsDiv.appendChild(itemDiv);
    }
  };
});
