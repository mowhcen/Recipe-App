/**
 * import necessary files
 */

import { createRecipe } from "./recipe";
import { printCardRecipe } from "./views";
import { setFilter } from "./filter";

/**
 * show recipe to site from array for loading
 */
printCardRecipe();
/**
 * add event for filtering recipe
 */
document.querySelector("#search-text").addEventListener("input", (e) => {
    setFilter({
        textSearch: e.target.value,
    });
    printCardRecipe();
});
/**
 * add element and send user to edit page
 */
document.querySelector("#add-recipe").addEventListener("click", () => {
    const id = createRecipe();
    location.assign(`/edit.html#${id}`);
});
