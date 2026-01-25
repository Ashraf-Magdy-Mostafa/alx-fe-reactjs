import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState(""); // comma-separated

  const handleSubmit = (event) => {
    event.preventDefault();

    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
    });

    setTitle("");
    setDescription("");
    setIngredients("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma-separated)"
        style={{ padding: 10, width: "100%", marginBottom: 8 }}
      />

      <button type="submit" style={{ padding: 10, width: "100%" }}>
        Add Recipe ➕
      </button>
    </form>
  );
};

export default AddRecipeForm;
