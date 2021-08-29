import { createRecipe } from "./recipe";
import { setFilter } from "./filter";

document.querySelector("#search-text").addEventListener("change", (e) => {
    setFilter({
        textSearch: e.target.value,
    });
    /**
     * rendering note don`t forget
     */
});

document.querySelector("#add-recipe").addEventListener("click", () => {
    const id = createRecipe();
    location.assign(`/edit.html#${id}`);
});
