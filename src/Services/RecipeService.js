import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const RecipeService = {
  searchRecipes(param) {
    return service.post(
      "/searchRecipes",
      { param },
      {
        withCredentials: true,
      }
    );
  },

  // POST route to create a new recipe in the DB
  addRecipe(recipe) {
    return service.post("/addRecipe", recipe, { withCredentials: true });
  },

  // GET all recipes from the DB
  getRecipes() {
    return service.get("/recipes", { withCredentials: true });
  },

  // GET route for getting recipe details
  geRecipeDetails(recipeId) {
    return service.get(`/recipes/${recipeId}`, { withCredentials: true });
  },

  // GET route for getting the ingredients for a recipe
  getRecipeIngredients(id) {
    return service.post(`/ingredients/${id}`, { withCredentials: true });
  },

  // POST route to delete a recipe
  deleteRecipe(recipeId) {
    return service.post(`/recipes/${recipeId}/delete`, {
      withCredentials: true,
    });
  },

  // POST route to update a recipe
  updateRecipe(recipeId) {
    return service.post(`/recipes/${recipeId}/update`, {
      withCredentials: true,
    });
  },
};

export default RecipeService;
