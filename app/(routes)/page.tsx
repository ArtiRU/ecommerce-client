import Billboard from '@/components/billboard';
import ProductList from '@/components/product/product-list';
import Container from '@/components/ui/container';
import getBillboard from '@/services/get-billboard';
import { getProducts } from '@/services/get-products';
import { FC } from 'react';

export const revalidate = 0;

const HomePage: FC = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('9a4f54fe-a15f-4eae-ac31-95c6b48863f1');

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList products={products} title="Featured Products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
