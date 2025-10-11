export default function CategoryTiles() {
  const items = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }));
  return (
    <section className="w-full px-4 sm:px-6 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((it) => (
          <div key={it.id} className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
            <div className="h-20 rounded-lg bg-gray-100 animate-pulse" />
            <div className="mt-2 h-3 w-3/4 rounded-full bg-gray-100 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}
