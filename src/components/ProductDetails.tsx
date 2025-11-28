'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      dispatch(addToCart(product));
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000); // Reset after 2 seconds
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto py-12 px-4">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">{product.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{product.category}</p>
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mt-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 dark:text-gray-300 mt-6 text-base">{product.description}</p>
        <Button
          onClick={handleAddToCart}
          disabled={isAdding || isAdded}
          size="lg"
          className="mt-8"
        >
          {isAdding && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isAdding ? 'Adding...' : isAdded ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Added!
            </>
          ) : (
            'Add to Cart'
          )}
        </Button>
      </div>
    </div>
  );
}
