import CategoryFilter from "components/sections/CategoryFilter";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Category: React.FC = () => {
  return (
    <div>
      <div className="w-full h-40 flex justify-center items-center bg-gray-200 text-4xl font-semibold">
        Jewels
      </div>
      <CategoryFilter />
    </div>
  );
};

export default Category;
