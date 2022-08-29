import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product as ProductItem } from "../../components";
import { urlFor, client } from "../../lib/client";
import { Product } from "../../typings";

interface IProps {
  products: Product[];
  product: Product;
}

export default function ProductDetails({ products, product }: IProps) {
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(product.image && product.image[0]).url()}
              alt={product.name}
            />
          </div>

          {/* <div className="small-images-container">
            {product.image?.map((item, i) => (
              <img
                src={urlFor(item).url()}
                alt={item.asset.url}
                key={item.asset.url}
                className=""
                onMouseEnter={undefined}
              />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{product.details}</p>
          <p className="price">${product.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={() => null}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick={() => null}>
                0
              </span>
              <span className="plus" onClick={() => null}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() => null}>
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={() => null}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container">
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product: Product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);
  return {
    props: { products, product },
  };
};
