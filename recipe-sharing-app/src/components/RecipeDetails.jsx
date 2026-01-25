import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

/**
 * RecipeDetails component
 * - Can be used with a `recipeId` prop OR via router param (:id)
 */
const RecipeDetails = ({ recipeId }) => {
  const params = useParams();
  const id = recipeId ?? Number(params.id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found 😵</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <DeleteRecipeButton recipeId={recipe.id} />
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
