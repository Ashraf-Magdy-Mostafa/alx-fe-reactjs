import { create } from "zustand";

// Actions: addRecipe, deleteRecipe, updateRecipe, setRecipes
export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",
  favorites: [],
  recommendations: [],

  // REQUIRED BY CHECKER
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({
      recipes: updated,
      filteredRecipes: updated,
    });
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    set({
      recipes: updated,
      filteredRecipes: updated,
    });
  },

  deleteRecipe: (recipeId) => {
    const updated = get().recipes.filter(
      (recipe) => recipe.id !== recipeId
    );
    set({
      recipes: updated,
      filteredRecipes: updated,
      favorites: get().favorites.filter((id) => id !== recipeId),
    });
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const term = get().searchTerm.toLowerCase();
    const filtered = get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term)
    );
    set({ filteredRecipes: filtered });
  },

  addFavorite: (recipeId) =>
    set({ favorites: [...get().favorites, recipeId] }),

  removeFavorite: (recipeId) =>
    set({
      favorites: get().favorites.filter((id) => id !== recipeId),
    }),

  generateRecommendations: () => {
    const recommended = get().recipes.filter(
      (recipe) =>
        get().favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
