import Subscribe from "components/sections/Subscribe";
import React from "react";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Subscribe />
    </div>
  );
};

export default Home;
