import React from "react";
import CategoryCard from "./partials/CategoryCard";
import Jewels from "../../assets/imgs/jewels-category.jpg";
import Woman from "../../assets/imgs/woman-category.jpg";
import Man from "../../assets/imgs/man-category.png";
import Eletronic from "../../assets/imgs/eletronics-category.png";

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col h-categoryContainer">
      <div className="flex justify-between w-full h-categoryImages">
        <CategoryCard
          className="w-1/2"
          title="Jewelry"
          image={Jewels}
          url="/categories/jewelery"
        />
        <div className="w-1/2 flex">
          <div className="w-1/2 ml-6 flex flex-col justify-between">
            <CategoryCard
              className="w-full h-64"
              title="Woman"
              image={Woman}
              url="/categories/women's clothing"
            />
            <CategoryCard
              className="w-full h-64"
              title="Man"
              image={Man}
              url="/categories/men's clothing"
            />
          </div>
          <CategoryCard
            className="w-1/2 ml-6"
            title="Eletronics"
            image={Eletronic}
            url="/categories/electronics"
          />
        </div>
      </div>

      <p className="w-2/3 mx-auto mt-16 text-lg text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
        fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
        luctus eget eu est.
      </p>
    </div>
  );
};

export default Categories;
