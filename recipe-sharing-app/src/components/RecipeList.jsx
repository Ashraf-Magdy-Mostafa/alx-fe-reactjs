import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ marginTop: 6 }}>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View details ➜</Link>
        </div>
      ))}

      {recipes.length === 0 && <p>No recipes found 😅</p>}
    </div>
  );
};

export default RecipeList;
