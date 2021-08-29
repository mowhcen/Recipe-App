import { removeRecipe, updateRecipe } from "./recipe";

/**
 * create edit page element
 */
const titleEl = document.querySelector("#recipe-title");
const bodyEl = document.querySelector("#recipe-ins");
const removeEl = document.querySelector("#remove");
const recipeId = location.hash.substring(1);

titleEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        title: e.target.value,
    });
});

bodyEl.addEventListener("change", (e) => {
    updateRecipe(recipeId, {
        body: e.target.value,
    });
});

removeEl.addEventListener("click", () => {
    removeRecipe(recipeId);
    location.assign("/index.html");
});
