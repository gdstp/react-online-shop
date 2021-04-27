import React, { useEffect, useReducer } from "react";
import { getFeaturedProducts } from "store/actions/ProductsActions";
import { ProductsReducer } from "store/reducers/ProductsReducer";
import { initialFeaturedState } from "store/types/ProductsType";
import FeaturedProductCard from "./partials/FeaturedProductCard";
import FeatureProductsLoading from "components/Loading/FeatureProductsLoading";

const FeaturedProducts: React.FC = () => {
  const [{ products, loading, error }, dispatch] = useReducer(
    ProductsReducer,
    initialFeaturedState
  );

  useEffect(() => {
    dispatch({ type: "REQUEST_FEATURED" });
    getFeaturedProducts()
      .then((res) => {
        dispatch({ type: "SUCCESS_FEATURED", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "FAILED_FEATURED", error: err });
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="w-full flex flex-col items-center mt-16">
        <h1 className="text-4xl font-semibold">Featured Products</h1>
        <div className="flex mt-6">
          <p className="px-2 border-b">All</p>
          <p className="px-2 text-gray-600">Popular</p>
          <p className="px-2 text-gray-600">New</p>
          <p className="px-2 text-gray-600">Sale</p>
        </div>
      </div>
      <div className="w-full flex justify-between mt-8">
        {loading &&
          [0, 1, 2, 3].map((item) => <FeatureProductsLoading key={item} />)}
        {products &&
          products.map((prod) => (
            <FeaturedProductCard
              key={prod.id}
              id={prod.id}
              name={prod.title}
              price={prod.price}
              image={prod.image}
            />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
