/**
 * import necessary files
 */

import {
    getRecipe,
    removeIngredients,
    sortRecipes,
    toggleAvailable,
} from "./recipe";

import { getFilter } from "./filter";

/**
 * create an a tag and header and paragraph for show summary in home page
 * @param {*it get recipe id} recipeId
 * @returns return element of each recipe
 */
const creatRecipeList = (recipeId) => {
    const containEl = document.createElement("div");
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

    cardEl.href = `/edit.html#${recipe.id}`;
    describeEl.textContent = `You have ${showIngredientStatus(
        recipe.id
    )} the ingredients`;

    /**
     * add element to right position
     */

    cardEl.appendChild(titleEl);
    cardEl.appendChild(describeEl);
    containEl.appendChild(cardEl);

    containEl.classList.add("contain");
    cardEl.classList.add("link");
    titleEl.classList.add("link__title");
    describeEl.classList.add("link__describe");

    return containEl;
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
/**
 * create ingredient for append to its place
 * @param {*get this array} ingredient
 * @returns and return card for show
 */
const createIngredientsList = (ingredient, id) => {
    const containEl = document.createElement("div");
    const ingCardEl = document.createElement("label");
    const ingCheckboxEl = document.createElement("input");
    const ingTitleEl = document.createElement("span");
    const ingButtonEl = document.createElement("button");

    ingCheckboxEl.type = "checkbox";

    ingCheckboxEl.checked = ingredient.available;
    ingTitleEl.textContent = ingredient.title;

    ingButtonEl.textContent = "Remove";

    ingCardEl.appendChild(ingCheckboxEl);
    ingCardEl.appendChild(ingTitleEl);
    ingCardEl.appendChild(ingButtonEl);
    containEl.appendChild(ingCardEl);

    ingButtonEl.addEventListener("click", () => {
        removeIngredients(ingredient.id, id);
        printIngredients(id);
    });

    ingCheckboxEl.addEventListener("click", (e) => {
        toggleAvailable(ingredient.id, id, e.target.checked);
        printIngredients(id);
    });

    return containEl;
};
/**
 * print all the item to DOM
 * @param {*receive} recipeId
 */
const printIngredients = (recipeId) => {
    const containerEl = document.querySelector("#ing-list");
    const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
    const ingredients = recipe.ingredients;

    containerEl.innerHTML = "";

    if (ingredients.length > 0) {
        ingredients.forEach((ingredient) => {
            const cardEl = createIngredientsList(ingredient, recipeId);
            containerEl.appendChild(cardEl);
        });
    } else {
        const statusEl = document.createElement("p");
        statusEl.textContent = "There is no ingredient to show";
        containerEl.appendChild(statusEl);
    }
};

const showIngredientStatus = (recipeId) => {
    const recipe = getRecipe().find((recipe) => recipe.id === recipeId);
    let available = 0;
    recipe.ingredients.forEach((ing) => {
        if (ing.available === true) {
            available += 1;
        }
    });
    const len = recipe.ingredients.length;
    console.log(available);
    if (available === 0) {
        return "none of";
    } else if (available === len) {
        return "all";
    } else if (available > 0 && available < len) {
        return "some of";
    }
};
/**
 * export function for use
 */
export {
    creatRecipeList,
    printCardRecipe,
    showEditPage,
    createIngredientsList,
    printIngredients,
};
