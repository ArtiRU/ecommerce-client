import { Product } from '@/types/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

type Query = {
  categoryId?: string;
  colorId?: string;
  isFeatured?: boolean;
  sizeId?: string;
};

export const productServiceTs = async (query: Query): Promise<Product[]> => {
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

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};
