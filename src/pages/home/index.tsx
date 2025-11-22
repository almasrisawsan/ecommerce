import ProductCard from "@/components/ProductCard";
import { TProduct } from "@/types/product";

export default function HomePageComponent({featuredProducts}: {featuredProducts: TProduct[]}) {

  return (
    <div>
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to Edu-Commerce</h1>
        <p className="text-xl text-gray-600 mt-4">Your one-stop shop for educational resources</p>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts?.map((product: TProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
