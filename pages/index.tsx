import { client } from "../lib/client";
import {
  FooterBanner,
  HeroBanner,
  Product as ProductItem,
} from "../components";
import { Banner, Product } from "../typings";

interface IProps {
  products: Product[];
  banners: Banner[];
}

const Home = ({ products, banners }: IProps) => {
  return (
    <>
      <HeroBanner heroBanner={banners[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={banners[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { products, banners },
  };
};
