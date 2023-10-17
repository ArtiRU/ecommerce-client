import { Category } from '@/types/types';

export type MenuRoutesType = {
  active: boolean;
  href: string;
  label: string;
};

export const getRoutes = (
  categories: Category[],
  pathname: string,
): MenuRoutesType[] => {
  if (!categories) {
    return [];
  }

  return categories.map((category) => ({
    active: pathname === `/category/${category.id}`,
    href: `/category/${category.id}`,
    label: category.name,
  }));
};
