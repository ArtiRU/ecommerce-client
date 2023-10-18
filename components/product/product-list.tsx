import ProductCard from '@/components/product/product-card';
import NoResults from '@/components/ui/no-results';
import { Product } from '@/types/types';
import { FC } from 'react';

interface ProductListProps {
  products: Product[];
  title: string;
}

const ProductList: FC<ProductListProps> = ({ products, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
