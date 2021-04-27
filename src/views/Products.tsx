import React from "react";
import FeaturedProducts from "components/sections/FeaturedProducts";
import ProductItem from "components/sections/ProductItem";
import Subscribe from "components/sections/Subscribe";

const Products: React.FC = () => {
  return (
    <div>
      <ProductItem />
      <FeaturedProducts />
      <Subscribe />
    </div>
  );
};

export default Products;
