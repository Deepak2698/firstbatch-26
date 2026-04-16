const API_URL = 'https://dummyjson.com/recipes';


// =======================
// METHOD 1: Async/Await
// =======================

async function fetchRecipesAsync() {
    try {
        showLoading();
        hideError();

        const response = await fetch(API_URL);
        const data = await response.json();

        console.log("Async Data:", data);

        // API returns { recipes: [...] }
        displayRecipes(data.recipes);

    } catch (error) {
        console.error("Error:", error);
        showError();
    } finally {
        hideLoading();
    }
}




// =======================
// DISPLAY FUNCTION
// =======================
function displayRecipes(recipes) {
    const container = document.getElementById('restaurants'); // reuse same div
    container.innerHTML = '';

    recipes.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="100%" />
            <h3>${item.name}</h3>
            <p><strong>Cuisine:</strong> ${item.cuisine}</p>
            <p><strong>Rating:</strong> ⭐ ${item.rating}</p>
            <p><strong>Difficulty:</strong> ${item.difficulty}</p>
        `;

        container.appendChild(card);
    });
}


// =======================
// UI FUNCTIONS
// =======================
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError() {
    document.getElementById('error').style.display = 'block';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
}


// =======================
// INIT
// =======================

// Use ONE
document.addEventListener('DOMContentLoaded', fetchRecipesAsync);

// OR
// document.addEventListener('DOMContentLoaded', fetchRecipesThen);