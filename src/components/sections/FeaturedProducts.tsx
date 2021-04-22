import React from "react";
import { BsHeart } from "react-icons/bs";
import Container from "../layout/Container";
import FeaturedProductCard from "./partials/FeatureProductCard";

const FeaturedProducts: React.FC = () => {
  return (
    <Container>
      <div className="w-full flex flex-col items-center mt-16">
        <h1 className="text-4xl font-semibold">Featured Products</h1>
        <div className="flex mt-6">
          <p className="px-2 border-b">All</p>
          <p className="px-2 text-gray-600">Popular</p>
          <p className="px-2 text-gray-600">New</p>
          <p className="px-2 text-gray-600">Sale</p>
        </div>
      </div>

      <div className="w-full flex justify-between mt-8">
        <FeaturedProductCard name="Stripes and flowers dress" price="29.00" />
        <FeaturedProductCard
          name="High heel sock-style ankle boots"
          price="49.00"
        />
        <FeaturedProductCard name="Jeans with sequins" price="39.00" />
        <FeaturedProductCard name="Mini wooden tote bag" price="29.00" />
      </div>
    </Container>
  );
};

export default FeaturedProducts;
