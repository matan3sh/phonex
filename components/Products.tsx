import { Product as ProductItem } from "./Product";
import { Product } from "../typings";

interface IProps {
  products: Product[];
}

export function Products({ products }: IProps) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
}
