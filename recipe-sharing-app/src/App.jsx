import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import RecipeDetails from "./components/RecipeDetails";

const Home = () => {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <h1 style={{ marginTop: 0 }}>Recipe Sharing App 🍲</h1>

      <AddRecipeForm />
      <SearchBar />
      <RecipeList />

      <hr style={{ margin: "18px 0" }} />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

const DetailsLayout = () => {
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: 16 }}>
      <Link to="/">← Back</Link>
      <RecipeDetails />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<DetailsLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
