import HomePageComponent from "@/pages/home";

async function getFeaturedProducts() {

  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return <HomePageComponent featuredProducts={featuredProducts} />
}
