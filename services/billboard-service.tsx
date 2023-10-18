import { Billboard } from '@/types/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const billboardService = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${URL}/${id}`);

  return response.json();
};

export default billboardService;
