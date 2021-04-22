import React from "react";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";
import MenuBar from "../components/sections/MenuBar";

const Home: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
