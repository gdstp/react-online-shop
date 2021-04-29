import React, { useEffect, useReducer } from "react";
import FeatureProductsLoading from "components/Loading/FeatureProductsLoading";
import CategoryFilter from "components/sections/CategoryFilter";
import FeaturedProductCard from "components/sections/partials/FeaturedProductCard";
import { getCategoryItems } from "store/actions/ProductsActions";
import { ProductsReducer } from "store/reducers/ProductsReducer";
import { initialFeaturedState } from "store/types/ProductsType";
import useSplitUrl from "hooks/spliturl";
import SectionHeader from "components/sections/SectionHeader";

const Category: React.FC = () => {
  const category = useSplitUrl()[2];
  const [{ products, loading }, dispatch] = useReducer(
    ProductsReducer,
    initialFeaturedState
  );

  useEffect(() => {
    dispatch({ type: "REQUEST_FEATURED" });
    getCategoryItems(category)
      .then((res) => dispatch({ type: "SUCCESS_FEATURED", payload: res }))
      .catch((err) => dispatch({ type: "FAILED_FEATURED", error: err }));
  }, [category]);

  return (
    <div>
      <SectionHeader text={category} />
      {/* <CategoryFilter /> */}
      <div className="w-full flex flex-wrap justify-between mt-8">
        {loading &&
          [0, 1, 2, 3].map((item) => <FeatureProductsLoading key={item} />)}
        {products &&
          products.map((prod) => (
            <FeaturedProductCard
              id={prod.id}
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
