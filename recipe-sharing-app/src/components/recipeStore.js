import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  // Core data
  recipes: [],
  favorites: [], // array of recipe IDs
  recommendations: [],

  // Search/filter
  searchTerm: "",
  filteredRecipes: [],

  // ---- Task 0 actions ----
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addRecipe: (newRecipe) => {
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return { recipes: updated };
    });
    get().filterRecipes(); // keep filtered list in sync
  },

  // ---- Task 1 actions ----
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)),
    }));
    get().filterRecipes();
  },

  deleteRecipe: (recipeId) => {
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== recipeId),
      favorites: state.favorites.filter((id) => id !== recipeId), // cleanup
    }));
    get().filterRecipes();
  },

  // ---- Task 2 actions ----
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // trigger filtering whenever term changes
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const term = searchTerm.trim().toLowerCase();

    const filtered = term
      ? recipes.filter((recipe) => {
          const title = (recipe.title || "").toLowerCase();
          const desc = (recipe.description || "").toLowerCase();
          const ingredients = (recipe.ingredients || []).join(" ").toLowerCase();
          return title.includes(term) || desc.includes(term) || ingredients.includes(term);
        })
      : recipes;

    set({ filteredRecipes: filtered });
  },

  // ---- Task 3 actions ----
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Simple deterministic-ish mock logic:
    // Recommend recipes NOT favorited but sharing ingredient keywords with favorites.
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));
    const favWords = new Set(
      favRecipes.flatMap((r) => (r.ingredients || []).map((x) => String(x).toLowerCase()))
    );

    const recommended = recipes
      .filter((r) => !favorites.includes(r.id))
      .filter((r) => (r.ingredients || []).some((ing) => favWords.has(String(ing).toLowerCase())))
      .slice(0, 6);

    set({ recommendations: recommended });
  },
}));
