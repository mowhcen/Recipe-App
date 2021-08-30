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

showEditPage(recipeId);
printIngredients(recipeId);

titleEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        title: e.target.value,
    });
});

instructionEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        instruction: e.target.value,
    });
});

addIngredientEl.addEventListener("submit", (e) => {
    e.preventDefault();
    createIngredients(recipeId, e.target.elements.title.value);
    printIngredients(recipeId);
    e.target.elements.title.value = "";
});

removeEl.addEventListener("click", () => {
    removeRecipe(recipeId);
    location.assign("/index.html");
});
