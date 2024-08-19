const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const recipeResults = document.getElementById('recipeResults');

// Sample recipe data for demonstration purposes
const sampleRecipes = [
    {
        title: "Pasta Carbonara",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAalkc6r4-ZATCHxIZXmz6eQbGLCQ3UCLNug&usqp=CAU",
        summary: "Delicious pasta dish with eggs, cheese, and bacon.",
        sourceUrl: "https://www.youtube.com/watch?v=D_2DBLAt57c",
        ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon"]
    },
    {
        title: "Caprese Salad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSg75GDUWk1eejJcq39LYyrOSMI_3hKzG-wd0dOHBR_z1FjcxlCsjbjEG3F-waL6LfNPs&usqp=CAU",
        summary: "Simple Italian salad made with tomatoes, mozzarella, and basil.",
        sourceUrl: "https://www.youtube.com/watch?v=3EtaYRm23OA",
        ingredients: ["Tomatoes", "Mozzarella cheese", "Fresh basil", "Balsamic vinegar"]
    },
    {
        title: "Chicken Stir Fry",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQs8zlUzCPiU5YbX5uhBKtTOLH9f55FCfPNg&usqp=CAU",
        summary: "Quick and easy chicken stir fry with vegetables.",
        sourceUrl: "https://www.youtube.com/watch?v=5dybdeTylz0",
        ingredients: ["Chicken breast", "Bell peppers", "Broccoli", "Soy sauce"]
    }
];

searchButton.addEventListener('click', searchRecipes);

function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = sampleRecipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm) || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm));
    });
    displayRecipes(filteredRecipes);
}

function displayRecipes(recipes) {
    recipeResults.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.summary}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <a href="${recipe.sourceUrl}" target="_blank">View Recipe</a>
        `;
        recipeResults.appendChild(recipeCard);
    });
}