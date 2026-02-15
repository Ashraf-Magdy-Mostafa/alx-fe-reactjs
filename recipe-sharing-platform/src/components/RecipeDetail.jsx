import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const numericId = Number(id);
    const foundRecipe = data.find((r) => r.id === numericId);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <section className="rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900">
          Recipe not found 😵‍💫
        </h1>
        <Link
          to="/"
          className="mt-4 inline-flex rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          ← Back to Home
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {recipe.title}
          </h1>
          <p className="mt-2 text-gray-600">{recipe.summary}</p>
        </div>

        <Link
          to="/"
          className="shrink-0 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50"
        >
          ← Home
        </Link>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="p-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-gray-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Ingredients 🧾
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border bg-gray-50 p-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Instructions 👩‍🍳
            </h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-gray-700">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
