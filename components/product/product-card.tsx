'use client';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import { Product } from '@/types/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { push } = useRouter();

  const ExpandIcon = <Expand className="text-gray-600" size={20} />;
  const ShoppingCartIcon = <ShoppingCart className="text-gray-600" size={20} />;

  const handleClick = () => {
    push(`/product/${product?.id}`);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      {/*IMAGES*/}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          className="aspect-square object-cover rounded-md"
          fill
          src={product?.images?.[0].url}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={ExpandIcon} onClick={() => {}} />
            <IconButton icon={ShoppingCartIcon} onClick={() => {}} />
          </div>
        </div>
      </div>
      {/* DESC*/}
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-gray-500 text-sm">{product.category?.name}</p>
      </div>
      {/*    price*/}
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
