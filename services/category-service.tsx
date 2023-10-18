import { Category } from '@/types/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(URL);

  return response.json();
};

export const getCategoryById = async (id: string): Promise<Category> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};
