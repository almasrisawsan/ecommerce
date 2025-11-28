
'use client';
import ProductCard from '@/components/ProductCard';
import { fetchProducts } from '@/store/thunks/productsThunk';
import { TProduct } from '@/types/product';
import { RootState } from '@reduxjs/toolkit/query';
import { Suspense,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// async function getAllProducts() {
//   const res = await fetch('https://fakestoreapi.com/products');
//   if (!res.ok) {
//     throw new Error('Failed to fetch products');
//   }
//   return res.json();
// }

const ProductsList = () => {

  const dispatch = useDispatch();
  const {items: products, status} =  useSelector((state: RootState) => state.products);

   useEffect(() => {
      dispatch(fetchProducts());
  }, [ dispatch]);

  console.log({status})

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
