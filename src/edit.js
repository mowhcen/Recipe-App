/**
 * import necessary files
 */

import { createIngredients, removeRecipe, updateRecipe } from "./recipe";
import { printIngredients, showEditPage } from "./views";

/**
 * create edit page element
 */
const titleEl = document.querySelector("#recipe-title");
const instructionEl = document.querySelector("#recipe-ins");
const addIngredientEl = document.querySelector("#add-ing");
const removeEl = document.querySelector("#remove");
const recipeId = location.hash.substring(1);

/**
 * initialize the page for first loading
 */
showEditPage(recipeId);
printIngredients(recipeId);

/**
 * title event for update
 */
titleEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        title: e.target.value,
    });
});
/**
 * instruction event for update
 */
instructionEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        instruction: e.target.value,
    });
});
/**
 * event for button to add new ingredient
 */
addIngredientEl.addEventListener("submit", (e) => {
    e.preventDefault();
    createIngredients(recipeId, e.target.elements.title.value);
    printIngredients(recipeId);
    e.target.elements.title.value = "";
});
/**
 * add event to button for delete recipe
 */
removeEl.addEventListener("click", () => {
    removeRecipe(recipeId);
    location.assign("/index.html");
});
