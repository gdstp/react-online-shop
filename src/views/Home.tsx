import React from "react";
import Hero from "../components/sections/Hero";
import MenuBar from "../components/sections/MenuBar";

const Home: React.FC = () => {
  return (
    <div>
      <MenuBar />
      <Hero />
    </div>
  );
};

export default Home;
