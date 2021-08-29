import uuidv4 from "uuid/v4";

/**
 * make value for saving recipe in local storage
 */
let recipes = [];

/**
 * Read data from local storage if is there any
 */
const loadRecipe = () => {
    const recipeJSON = localStorage.getItem("recipe");

    try {
        return recipeJSON ? JSON.parse(recipeJSON) : [];
    } catch (e) {
        return [];
    }
};

/**
 * store recipe to localStorage
 */
const storeRecipe = () => {
    localStorage.setItem("recipe", JSON.stringify(recipes));
};
/**
 * return recipe
 */
const getRecipe = () => recipes;
/**
 * create note object
 * @returns id
 */
const createRecipe = () => {
    const id = uuidv4();
    recipes.push({
        id: id,
        title: "",
        instruction: "",
        ingredients: [],
    });

    storeRecipe();

    return id;
};
/**
 * find a recipe and remove it by its id
 */
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id);

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1);
        storeRecipe();
    }
};
/**
 *
 */
const updateRecipe = (id, updates) => {
    const recipe = recipes.find((recipe) => recipe.id === id);

    if (!recipe) {
        return;
    }

    if (typeof updates.title === "string") {
        recipe.title = updates.title;
    }

    if (typeof updates.instruction === "string") {
        recipe.instruction = updates.instruction;
    }

    storeRecipe();

    return recipe;
};
/**
 * load recipe to its variables
 */
recipes = loadRecipe();

/**
 * export function for use
 */
export {
    updateRecipe,
    loadRecipe,
    storeRecipe,
    getRecipe,
    createRecipe,
    removeRecipe,
};
