import { createRecipe } from "./recipe";
import { printCardRecipe } from "./views";
import { setFilter } from "./filter";

printCardRecipe();

document.querySelector("#search-text").addEventListener("input", (e) => {
    setFilter({
        textSearch: e.target.value,
    });
    printCardRecipe();
});

document.querySelector("#add-recipe").addEventListener("click", () => {
    const id = createRecipe();
    location.assign(`/edit.html#${id}`);
});
