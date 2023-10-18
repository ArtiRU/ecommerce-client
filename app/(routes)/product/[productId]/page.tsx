import Gallery from '@/components/gallery/gallery';
import Info from '@/components/info';
import ProductList from '@/components/product/product-list';
import Container from '@/components/ui/container';
import { getProduct, productServiceTs } from '@/services/product-service.ts';
import { FC } from 'react';

export const revalidate = 0;

interface ProductIdPageProps {
  params: {
    productId: string;
  };
}

const ProductIdPage: FC<ProductIdPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await productServiceTs({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bh-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info product={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList products={suggestedProducts} title="Related Items" />
        </div>
      </Container>
    </div>
  );
};

export default ProductIdPage;
