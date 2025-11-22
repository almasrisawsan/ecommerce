
import ProductCard from '@/components/ProductCard';
import { TProduct } from '@/types/product';
import { Suspense } from 'react';

async function getAllProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

const ProductsList = async () => {
  const products = await getAllProducts();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products?.map((product: TProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Products</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <ProductsList />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
