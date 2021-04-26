import React from "react";
import CategoryFilterItem from "./partials/CategoryFilterItem";

const CategoryFilter: React.FC = () => {
  return (
    <div className="flex justify-between mt-4">
      <CategoryFilterItem
        title="Collection"
        items={["Summer", "Winter", "Fall"]}
      />

      <CategoryFilterItem title="Size" items={["XL", "GG", "M"]} />

      <CategoryFilterItem title="Color" items={["Blue", "Red", "Purple"]} />

      <CategoryFilterItem
        title="Sort"
        items={["Price low to high", "Price high to low"]}
      />
    </div>
  );
};

export default CategoryFilter;
