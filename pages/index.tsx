import { client } from "../lib/client";
import { FooterBanner, HeroBanner, Products } from "../components";
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

      <Products products={products} />

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
