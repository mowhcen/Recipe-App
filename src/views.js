import { getRecipe, sortRecipes } from "./recipe";

import { getFilter } from "./filter";

/**
 * create an a tag and header and paragraph for show summary in home page
 * @param {*it get recipe id} recipeId
 * @returns return element of each recipe
 */
const creatRecipeList = (recipeId) => {
    const cardEl = document.createElement("a");
    const titleEl = document.createElement("h2");
    const describeEl = document.createElement("p");

    const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
    /**
     * put text content for created elements
     */
    if (recipe.title) {
        titleEl.textContent = recipe.title;
    } else {
        titleEl.textContent = "Unnamed Recipe";
    }

    cardEl.href = `/edit.html#${recipeId}`;
    describeEl.textContent = `You have ${undefined} the ingredients`;

    /**
     * add element to right position
     */

    cardEl.appendChild(titleEl);
    cardEl.appendChild(describeEl);

    return cardEl;
};
/**
 * it print or reprint element by filter text
 */
const printCardRecipe = () => {
    const containerEl = document.querySelector("#recipe-list");

    containerEl.innerHTML = "";

    const filteredRecipe = sortRecipes(getFilter());
    if (filteredRecipe.length > 0) {
        filteredRecipe.forEach((recipe) => {
            const recipeEl = creatRecipeList(recipe.id);
            containerEl.appendChild(recipeEl);
        });
    } else {
        const statusEl = document.createElement("p");
        statusEl.textContent = "There is no Recipe to show";
        containerEl.appendChild(statusEl);
    }
};
/**
 * by getting recipe id it show what its current title and body
 * @param {*get id for edited recipe} recipeId
 */
const showEditPage = (recipeId) => {
    const titleEl = document.querySelector("#recipe-title");
    const instructionEl = document.querySelector("#recipe-ins");

    const recipe = getRecipe().find((recipe) => recipe.id === recipeId);

    titleEl.value = recipe.title;
    instructionEl.value = recipe.instruction;
};

const createIngredientsList = (ingredient) => {
    const ingCardEl = document.createElement("a");
    const ingCheckboxEl = document.createElement("checkbox");
    const ingTitleEl = document.createElement("h3");
    const ingButtonEl = document.createElement("button");

    ingTitleEl.textContent = ingredient.title;
    ingButtonEl.textContent = "Remove";

    ingCardEl.appendChild(ingCheckboxEl);
    ingCardEl.appendChild(ingTitleEl);
    ingCardEl.appendChild(ingButtonEl);

    return ingCardEl;
};

const printIngredients = (recipeId) => {
    const containerEl = document.querySelector("#ing-list");
    const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
    const ingredients = recipe.ingredients;

    containerEl.innerHTML = "";

    if (ingredients.length > 0) {
        ingredients.forEach((ingredient) => {
            const ingCardEl = createIngredientsList(ingredient);
            containerEl.appendChild(ingCardEl);
        });
    } else {
        const statusEl = document.createElement("p");
        statusEl.textContent = "There is no ingredient to show";
        containerEl.appendChild(statusEl);
    }
};

export {
    creatRecipeList,
    printCardRecipe,
    showEditPage,
    createIngredientsList,
    printIngredients,
};
