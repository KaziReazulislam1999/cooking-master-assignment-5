const inputValue = document.getElementById("input-value");
const searchBtn = document.getElementById("searchBtn");
const menuItemsDiv = document.getElementById("menu-items");
const menuDetails = document.getElementById("menu-items-details");
const closeBtn = document.getElementById("cross");

closeBtn.addEventListener("click", function () {
  menuDetails.style.display = "none";
});

searchBtn.addEventListener("click", function () {
  const input = inputValue.value;
  displayFoodItems(input);
});

function displayFoodItems(input) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      singleItem(data);
    });
}

function singleItem(item) {
  menuItemsDiv.innerHTML = "";

  const getItems = item.meals;
  if (getItems != null) {
    getItems.forEach((meal) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      const items = `
            <img src="${meal.strMealThumb}" width="300px" >
              <h3 class="items-heading">${meal.strMeal}</h3>
          `;
      itemDiv.innerHTML = items;
      menuItemsDiv.appendChild(itemDiv);

      itemDiv.addEventListener("click", function () {
        menuDetails.style.display = "flex";
        itemsDetails(meal);
      });
    });
  } else {
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = `<h3 class ="error-message"> Sorry Your Items Is Not Available </h3>`;
    menuItemsDiv.appendChild(errorMessage);
  }
}

function itemsDetails(meal) {
  const detailsBody = document.querySelector(".details");
  detailsBody.innerHTML = `
  <img
  src="${meal.strMealThumb}"
  alt=""
/>
<div class="details-bottom">
  <h1>${meal.strMeal}</h1>
  <h3>Ingredients</h3>

  <ul>
    <li><i class="fas fa-check-circle"></i>${meal.strIngredient1}</li>
    <li><i class="fas fa-check-circle"></i>${meal.strIngredient2}</li>
    <li><i class="fas fa-check-circle"></i>${meal.strIngredient3}</li>
    <li><i class="fas fa-check-circle"></i>${meal.strIngredient4}</li>
    <li><i class="fas fa-check-circle"></i>${meal.strIngredient5}</li>
  </ul>
</div>
  
  `;
}
