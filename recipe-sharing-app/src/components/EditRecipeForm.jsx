import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState((recipe.ingredients || []).join(", "));

  const onSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      ...recipe,
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
    });
  };

  return (
    <form onSubmit={onSubmit} style={{ marginTop: 12 }}>
      <h3>Edit recipe ✍️</h3>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <button type="submit" style={{ padding: 10 }}>
        Save changes ✅
      </button>
    </form>
  );
};

export default EditRecipeForm;
