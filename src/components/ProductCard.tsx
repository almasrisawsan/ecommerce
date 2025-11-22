
import Image from 'next/image';
import Link from 'next/link';
import { TProduct } from "@/types/product";

type TProductProps = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
}

type TProductCardProps = {
  product: TProduct | TProductProps;
}

const ProductCard = ({ product }: TProductCardProps) => {
  console.log({product})
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-64">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
          <p className="text-gray-600 mt-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
