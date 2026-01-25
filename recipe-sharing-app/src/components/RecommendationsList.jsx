import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((s) => s.recommendations);
  const generateRecommendations = useRecipeStore((s) => s.generateRecommendations);

  return (
    <div>
      <h2>Recommendations 🎯</h2>

      <button onClick={generateRecommendations} style={{ padding: 10, marginBottom: 10 }}>
        Generate recommendations ✨
      </button>

      {recommendations.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: 12, marginBottom: 10 }}
        >
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ marginTop: 6 }}>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>Open ➜</Link>
        </div>
      ))}

      {recommendations.length === 0 && <p>Click the button to generate 😄</p>}
    </div>
  );
};

export default RecommendationsList;
