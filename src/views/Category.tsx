import React, { useEffect, useReducer } from "react";
import FeatureProductsLoading from "components/Loading/FeatureProductsLoading";
import CategoryFilter from "components/sections/CategoryFilter";
import FeaturedProductCard from "components/sections/partials/FeaturedProductCard";
import { useLocation } from "react-router";
import { getCategoryItems } from "store/actions/ProductsActions";
import { ProductsReducer } from "store/reducers/ProductsReducer";
import { initialFeaturedState } from "store/types/ProductsType";

const Category: React.FC = () => {
  const location = useLocation();
  const url = location.pathname.split("/");
  const category = url[2];
  const [{ products, loading }, dispatch] = useReducer(
    ProductsReducer,
    initialFeaturedState
  );

  useEffect(() => {
    dispatch({ type: "REQUEST_FEATURED" });
    getCategoryItems(category)
      .then((res) => dispatch({ type: "SUCCESS_FEATURED", payload: res }))
      .catch((err) => dispatch({ type: "FAILED_FEATURED", error: err }));
  }, [location]);

  return (
    <div>
      <div className="w-full h-40 flex justify-center items-center bg-gray-200 text-4xl font-semibold uppercase">
        {category}
      </div>
      <CategoryFilter />
      <div className="w-full flex flex-wrap justify-between mt-8">
        {loading &&
          [0, 1, 2, 3].map((item) => <FeatureProductsLoading key={item} />)}
        {products &&
          products.map((prod) => (
            <FeaturedProductCard
              key={prod.id}
              name={prod.title}
              price={prod.price}
              image={prod.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Category;
