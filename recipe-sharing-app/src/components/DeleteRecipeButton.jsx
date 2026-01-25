import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleClick = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return (
    <button onClick={handleClick} style={{ padding: 10, marginTop: 10 }}>
      Delete 🗑️
    </button>
  );
};

export default DeleteRecipeButton;
