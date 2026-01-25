import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const onDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <button onClick={onDelete} style={{ padding: 10, marginTop: 10 }}>
      Delete 🗑️
    </button>
  );
};

export default DeleteRecipeButton;
