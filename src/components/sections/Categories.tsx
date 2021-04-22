import React from "react";
import Container from "../layout/Container";
import CategoryCard from "./partials/CategoryCard";

const Categories: React.FC = () => {
  return (
    <Container className="flex flex-col border h-categoryContainer">
      <div className="flex justify-between w-full h-categoryImages">
        <CategoryCard className="w-1/2" title="Jewelry" />
        <div className="w-1/2 flex">
          <div className="w-1/2 ml-6 flex flex-col justify-between">
            <CategoryCard className="w-full h-64" title="Jewelry" />
            <CategoryCard className="w-full h-64" title="Jewelry" />
          </div>
          <CategoryCard className="w-1/2 ml-6" title="Jewelry" />
        </div>
      </div>

      <p className="w-2/3 mx-auto mt-16 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
        fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
        luctus eget eu est.
      </p>
    </Container>
  );
};

export default Categories;
