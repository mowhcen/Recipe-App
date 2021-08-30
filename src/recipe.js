import uuidv4 from "uuid/v4";

/**
 * make value for saving recipe in local storage
 */
let recipes = [];

/**
 * Read data from local storage if is there any
 */
const loadRecipe = () => {
    const recipeJSON = localStorage.getItem("recipes");

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
    localStorage.setItem("recipes", JSON.stringify(recipes));
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
 * it creat new ingredient
 * @param {*id of recipe} id
 * @param {*name of ingredient} name
 */
const createIngredients = (recipeId, name) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    const recipe = recipes.find((recipe) => recipe.id === recipeId);
    if (name.trim() && recipeIndex >= 0) {
        recipe.ingredients.push({
            id: uuidv4(),
            available: false,
            title: name,
        });
        recipes.splice(recipeIndex, 1, recipe);
        storeRecipe();
    }
};

const toggleAvailable = (ingredientId, recipeId, checked) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    let recipe = recipes.find((recipe) => recipe.id === recipeId);
    const ingIndex = recipe.ingredients.findIndex(
        (ing) => ing.id === ingredientId
    );
    let ing = recipe.ingredients.find((ing) => ing.id === ingredientId);

    ing.available = checked;

    recipe.ingredients.splice(ingIndex, 1, ing);
    recipes.splice(recipeIndex, 1, recipe);
    storeRecipe();
};
/**
 * remove the chosen ingredient
 * @param {it receive its id} ingredientId
 */
const removeIngredients = (ingredientId, recipeId) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
    let recipe = recipes.find((recipe) => recipe.id === recipeId);
    const ingIndex = recipe.ingredients.findIndex(
        (ing) => ing.id === ingredientId
    );

    recipe.ingredients.splice(ingIndex, 1);
    recipes.splice(recipeIndex, 1, recipe);
    storeRecipe();
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
 * making recipe sorted by filter value
 */
const sortRecipes = (filter) => {
    const sortedRecipe = [];
    recipes.forEach((recipe) => {
        if (
            recipe.title.toLowerCase().includes(filter.textSearch.toLowerCase())
        ) {
            sortedRecipe.push(recipe);
        }
    });
    return sortedRecipe;
};
/**
 * load recipe to its variables
 */
recipes = loadRecipe();

/**
 * export function for use
 */
export {
    createIngredients,
    removeIngredients,
    updateRecipe,
    loadRecipe,
    storeRecipe,
    getRecipe,
    createRecipe,
    removeRecipe,
    sortRecipes,
    toggleAvailable,
};
