import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favoriteRecipes = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((r) => r.id === id))
      .filter(Boolean)
  );

  return (
    <div>
      <h2>My Favorites ⭐</h2>

      {favoriteRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ marginTop: 6 }}>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>Open ➜</Link>
        </div>
      ))}

      {favoriteRecipes.length === 0 && <p>No favorites yet 😄</p>}
    </div>
  );
};

export default FavoritesList;
