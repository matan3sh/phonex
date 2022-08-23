type Image = {
  asset: {
    url: string;
  };
};

export type Product = {
  _id: string;
  _createdAt: string;
  slug: {
    current: string;
  };
  datails: string;
  name: string;
  price: number;
  image: Image[];
};

export type Banner = {
  buttonText: string;
  desc: string;
  discount: string;
  image: Image;
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTime: string;
  smallText: string;
};
