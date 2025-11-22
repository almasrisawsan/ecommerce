
async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories?.map((category: string) => (
          <a key={category} href={`/categories/${encodeURIComponent(category.toLowerCase())}`}>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-center">{category}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
