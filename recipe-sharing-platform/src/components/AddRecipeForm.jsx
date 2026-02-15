import { useMemo, useState } from "react";

function splitLinesToItems(text) {
  return text
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [touched, setTouched] = useState({
    title: false,
    ingredients: false,
    steps: false,
  });

  const ingredientItems = useMemo(
    () => splitLinesToItems(ingredients),
    [ingredients]
  );

  const stepItems = useMemo(() => splitLinesToItems(steps), [steps]);

  const errors = useMemo(() => {
    const e = {};
    if (!title.trim()) e.title = "Title is required.";
    if (!ingredients.trim()) e.ingredients = "Ingredients are required.";
    if (!steps.trim()) e.steps = "Preparation steps are required.";

    // extra validation: at least 2 ingredients
    if (ingredients.trim() && ingredientItems.length < 2) {
      e.ingredients = "Please provide at least 2 ingredients (one per line).";
    }
    return e;
  }, [title, ingredients, steps, ingredientItems.length]);

  const isValid = Object.keys(errors).length === 0;

  function onSubmit(e) {
    e.preventDefault();
    setTouched({ title: true, ingredients: true, steps: true });

    if (!isValid) return;

    // This project uses a static JSON file for mock data.
    // So we only "simulate" saving by showing the result.
    const payload = {
      title: title.trim(),
      ingredients: ingredientItems,
      steps: stepItems,
    };

    alert(
      "✅ Recipe submitted (mock)\n\n" +
        JSON.stringify(payload, null, 2) +
        "\n\nNote: data.json is static, so this is a front-end simulation."
    );

    setTitle("");
    setIngredients("");
    setSteps("");
    setTouched({ title: false, ingredients: false, steps: false });
  }

  const fieldClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900";
  const labelClass = "text-sm font-medium text-gray-900";
  const hintClass = "mt-1 text-xs text-gray-500";
  const errorClass = "mt-1 text-xs font-medium text-red-600";

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add a New Recipe 📝</h1>
        <p className="mt-2 text-gray-600">
          Fill out the form below. Validation is done on the front-end.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-5 rounded-2xl border bg-white p-6 shadow-sm"
      >
        <div>
          <label className={labelClass} htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            className={fieldClass}
            placeholder="e.g., Classic Pancakes"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, title: true }))}
          />
          <p className={hintClass}>Give your recipe a clear name.</p>
          {touched.title && errors.title ? (
            <p className={errorClass}>{errors.title}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="ingredients">
            Ingredients (one per line)
          </label>
          <textarea
            id="ingredients"
            className={fieldClass}
            rows={6}
            placeholder={"e.g.\n2 eggs\n1 cup flour\n1 cup milk"}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, ingredients: true }))}
          />
          <p className={hintClass}>
            Add at least <span className="font-semibold">2</span> ingredients.
          </p>
          {touched.ingredients && errors.ingredients ? (
            <p className={errorClass}>{errors.ingredients}</p>
          ) : null}
        </div>

        <div>
          <label className={labelClass} htmlFor="steps">
            Preparation Steps (one per line)
          </label>
          <textarea
            id="steps"
            className={fieldClass}
            rows={7}
            placeholder={"e.g.\nPreheat the pan\nMix ingredients\nCook 2 minutes each side"}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, steps: true }))}
          />
          <p className={hintClass}>Write clear steps to follow.</p>
          {touched.steps && errors.steps ? (
            <p className={errorClass}>{errors.steps}</p>
          ) : null}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isValid && (touched.title || touched.ingredients || touched.steps)}
        >
          Submit Recipe ✅
        </button>
      </form>

      <div className="mt-6 rounded-2xl border bg-gray-50 p-5">
        <h2 className="text-lg font-semibold text-gray-900">Preview 🔍</h2>
        <p className="mt-1 text-sm text-gray-600">
          This preview updates as you type (no data is permanently saved).
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-xl border bg-white p-4">
            <p className="text-sm font-semibold text-gray-900">Title</p>
            <p className="text-sm text-gray-700">{title.trim() || "—"}</p>
          </div>

          <div className="rounded-xl border bg-white p-4">
            <p className="text-sm font-semibold text-gray-900">Ingredients</p>
            {ingredientItems.length ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {ingredientItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-700">—</p>
            )}
          </div>

          <div className="rounded-xl border bg-white p-4">
            <p className="text-sm font-semibold text-gray-900">Steps</p>
            {stepItems.length ? (
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
                {stepItems.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-gray-700">—</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
