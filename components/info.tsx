'use client';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import { useCartStore } from '@/hooks/use-cart';
import { useModalStore } from '@/hooks/use-modal-store';
import { Product } from '@/types/types';
import { ShoppingCart } from 'lucide-react';
import { FC } from 'react';

interface InfoProps {
  product: Product;
}

const Info: FC<InfoProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { onClose } = useModalStore();

  const onAddToCart = () => {
    addItem(product);
    onClose();
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={product?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-x-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size: </h3>
          <div>{product?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color: </h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: product?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
