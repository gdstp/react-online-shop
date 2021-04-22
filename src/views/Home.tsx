import React from "react";
import Footer from "../components/layout/Footer";
import Categories from "../components/sections/Categories";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Hero from "../components/sections/Hero";
import MenuBar from "../components/sections/MenuBar";
import Subscribe from "../components/sections/Subscribe";

const Home: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
