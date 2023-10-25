'use client';

import Currency from '@/components/ui/currency';
import IconButton from '@/components/ui/icon-button';
import { useCartStore } from '@/hooks/use-cart';
import { useModalStore } from '@/hooks/use-modal-store';
import { Product } from '@/types/types';
import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { push } = useRouter();
  const cart = useCartStore();
  const { onOpen } = useModalStore();

  const ExpandIcon = <Expand className="text-gray-600" size={20} />;
  const ShoppingCartIcon = <ShoppingCart className="text-gray-600" size={20} />;

  const handleClick = () => {
    push(`/product/${product?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    cart.addItem(product);
  };
  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          className="aspect-square object-cover rounded-md"
          fill
          src={product?.images?.[0].url}
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={ExpandIcon} onClick={onPreview} />
            <IconButton icon={ShoppingCartIcon} onClick={onAddToCart} />
          </div>
        </div>
      </div>
      <div>
        <p className="font-semibold text-lg">{product.name}</p>
        <p className="text-gray-500 text-sm">{product.category?.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
