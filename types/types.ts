export type Billboard = {
  id: string;
  imageUrl: string;
  label: string;
};

export type Category = {
  billboard: Billboard;
  id: string;
  name: string;
};

export type Image = {
  id: string;
  url: string;
};

export type Color = {
  id: string;
  name: string;
  value: string;
};

export type Size = {
  id: string;
  name: string;
  value: string;
};

export type Product = {
  category: Category;
  color: Color;
  id: string;
  images: Image[];
  isFeatured: boolean;
  name: string;
  price: string;
  size: Size;
};
