
import ProductDetails from '@/components/ProductDetails';

async function getProduct(id: string) {
  
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'force-cache' ,
    next: { revalidate: 3600 }, // Revalidate every 1 hour
  });
  
  if (!res.ok) {
    // Return null or an empty object to indicate not found
    return null;
  }
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    console.error('Failed to parse JSON:', text);
    return null; // Or handle as an error
  }
}

export default async function ProductDetailsPage({params}:{
  params: Promise<{ productId: string }>
}) {

  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return <ProductDetails product={product} />;
}
