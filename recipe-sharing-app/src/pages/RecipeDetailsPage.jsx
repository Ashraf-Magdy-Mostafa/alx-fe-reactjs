import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "../components/recipeStore";
import EditRecipeForm from "../components/EditRecipeForm";
import DeleteRecipeButton from "../components/DeleteRecipeButton";
import FavoriteToggleButton from "../components/FavoriteToggleButton";

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) {
    return (
      <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
        <p>Recipe not found 😵</p>
        <Link to="/">Go back</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <Link to="/">← Back</Link>

      <h1 style={{ marginBottom: 6 }}>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {recipe.ingredients?.length > 0 && (
        <>
          <h3>Ingredients 🧂</h3>
          <ul>
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </>
      )}

      <FavoriteToggleButton recipeId={recipe.id} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetailsPage;
