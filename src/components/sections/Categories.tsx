import React from "react";
import CategoryCard from "./partials/CategoryCard";
import Jewels from "../../assets/imgs/jewels-category.jpg";
import Woman from "../../assets/imgs/woman-category.jpg";
import Man from "../../assets/imgs/man-category.png";
import Eletronic from "../../assets/imgs/eletronics-category.png";

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col lg:h-categoryContainer">
      <div className="w-full flex flex-col lg:flex-row justify-between lg:h-categoryImages">
        <CategoryCard
          className="w-full lg:h-auto h-64 border lg:w-1/2"
          title="Jewelry"
          image={Jewels}
          url="/categories/jewelery"
        />
        <div className="w-full lg:w-1/2 flex lg:flex-row flex-col">
          <div className="w-full lg:w-1/2 lg:ml-6 flex flex-col justify-between">
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
            className="w-full h-64 lg:h-auto lg:w-1/2 lg:ml-6"
            title="Eletronics"
            image={Eletronic}
            url="/categories/electronics"
          />
        </div>
      </div>

      <p className="w-2/3 mx-auto mt-16 text-lg text-center lg:block hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
        fermentum nibh, vel aliquet massa. Etiam in magna id risus lacinia
        luctus eget eu est.
      </p>
    </div>
  );
};

export default Categories;
