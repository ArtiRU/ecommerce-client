import { Product } from '@/types/types';

export const mockProduct: Product = {
  category: {
    billboard: {
      id: '63cc7b48-7c27-40d7-802b-620319c3930d',
      imageUrl: '63cc7b48-7c27-40d7-802b-620319c3930d',
      label: '63cc7b48-7c27-40d7-802b-620319c3930d',
    },
    id: '63cc7b48-7c27-40d7-802b-620319c3930d',
    name: 'Slippers',
  },
  color: {
    id: '80260421-858d-4e44-b13e-f3d5f22df218',
    name: 'Black',
    value: '#000000',
  },
  id: 'a13d87cd-fced-427e-946e-8b43e1ebb3a6',
  images: [
    {
      id: '859d08b0-e22b-4eaa-95ea-904c66938b36',
      url: 'https://res.cloudinary.com/dwvy3ynjq/image/upload/v1711205193/rrzw6oxhq90tkisczwbk.webp',
    },
  ],
  isFeatured: false,
  name: 'Male Slippers',
  price: '5.99',
  size: {
    id: '1f444999-e59b-484c-89c1-893664a11cd9',
    name: 'Medium',
    value: 'M',
  },
};
