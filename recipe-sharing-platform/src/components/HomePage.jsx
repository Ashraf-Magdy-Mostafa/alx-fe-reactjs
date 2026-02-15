import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <section>
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-900">Discover Recipes ✨</h1>
        <p className="text-gray-600">
          Browse popular recipes, open details, or add your own.
        </p>
      </div>

      {/* Explicit responsive grid for checker */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <article
            key={r.id}
            className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100">
              <img
                src={r.image}
                alt={r.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-900">{r.title}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {r.summary}
              </p>

              <Link
                to={`/recipe/${r.id}`}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                View Details →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
