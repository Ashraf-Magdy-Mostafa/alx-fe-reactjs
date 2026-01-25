import { useRecipeStore } from "./recipeStore";

const FavoriteToggleButton = ({ recipeId }) => {
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  const isFav = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFav ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{ padding: 10, marginTop: 10, marginRight: 10 }}
    >
      {isFav ? "Unfavorite 💔" : "Favorite ⭐"}
    </button>
  );
};

export default FavoriteToggleButton;
