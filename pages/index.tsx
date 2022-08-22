import type { NextPage } from "next";

import { Footer, HeroBanner } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"].map(
          (product) => product
        )}
      </div>

      <Footer />
    </>
  );
};

export default Home;
