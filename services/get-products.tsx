import { Product } from '@/types/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  sizeId?: string;
};

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
      sizeId: query.sizeId,
    },
    url: URL,
  });
  const response = await fetch(url);

  return response.json();
};

export default getProducts;
