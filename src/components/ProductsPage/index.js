import React from 'react';

import products from "json/products.json";
import Product from "components/Product";

const ProductsPage = () => {
  return (
    <section className="product-list">
      <ul>
        {Object.values(products)[0].map((product, index) => (
          <li key={index}>
            <Product product={product} index={index} />
          </li>
        ))}
      </ul>
    </section>

  );
};

export default ProductsPage;
