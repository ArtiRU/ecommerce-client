import Filter from '@/app/(routes)/category/[categoryId]/component/filter';
import MobileFilters from '@/app/(routes)/category/[categoryId]/component/mobile-filters';
import Billboard from '@/components/billboard';
import ProductCard from '@/components/product/product-card';
import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import { getCategoryById } from '@/services/category-service';
import { getColors } from '@/services/color-service';
import { productServiceTs } from '@/services/product-service.ts';
import { getSizes } from '@/services/size-service';
import { FC } from 'react';

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await productServiceTs({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategoryById(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter data={sizes} name="Sizes" valueKey="sizeId" />
              <Filter data={colors} name="Colors" valueKey="colorId" />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
