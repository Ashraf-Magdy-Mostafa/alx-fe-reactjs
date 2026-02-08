export default function Loader({ text = "Loading..." }) {
  return (
    <div className="rounded-lg border bg-white p-4 text-sm text-slate-700">
      {text}
    </div>
  );
}
