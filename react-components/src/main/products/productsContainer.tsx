import { products } from "../../data/products";
import { Product } from "./product";

export const ProductsContainer = () => (
  <div className="products__container">
    {products.map(
      ({
        imgUrl,
        title,
        year,
        company,
        weight,
        topSpeed,
        color,
        popular,
        quantity,
      }) => (
        <Product
          url={imgUrl}
          title={title}
          year={year}
          company={company}
          weight={weight}
          speed={topSpeed}
          color={color}
          popularity={popular}
          amount={quantity}
        />
      )
    )}
  </div>
);
