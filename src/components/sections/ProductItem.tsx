import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import useParseUrl from "hooks/spliturl";
import { BiHeart } from "react-icons/bi";
import ProductInfoSwitch from "components/sections/partials/ProductInfoSwitch";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";
import { SingleProductReducer } from "store/reducers/ProductsReducer";
import { initialSingleProductState } from "store/types/ProductsType";
import { getSingleItem } from "store/actions/ProductsActions";
import ProductItemLoading from "components/Loading/ProductItemLoading";
import { Redirect } from "react-router";

const Image = styled.div<{ image: string }>`
  width: 50%;
  height: 604px;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const ProductItem: React.FC = () => {
  const productId = parseInt(useParseUrl()[2]);
  const [{ product, error, loading }, dispatch] = useReducer(
    SingleProductReducer,
    initialSingleProductState
  );
  const [desc, setDesc] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "REQUEST_PRODUCT" });
    getSingleItem(productId)
      .then((res) => dispatch({ type: "SUCCESS_PRODUCT", payload: res }))
      .catch((err) => dispatch({ type: "FAILED_PRODUCT", error: err }));
  }, [productId]);

  return (
    <>
      {loading && <ProductItemLoading />}
      {error && <Redirect to="/404" />}
      {product && (
        <>
          <div className="flex justify-between h-auto ">
            <Image image={product.image} />
            <div className="w-1/2 px-14 flex flex-col justify-center -mt-24">
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">{product.title}</p>
                <p className="mt-1">${product.price}</p>
              </div>

              <CategoryFilterItem
                title="Quantity:"
                items={["1", "2", "3", "4", "5"]}
                className="mt-6"
              />

              <div className="flex mt-8">
                <button className="w-40 py-2 bg-black text-white">
                  Add to Cart
                </button>
                <button className="flex justify-center ml-4 items-center w-40 py-2 text-sm font-semibold hover:text-red-500 transition">
                  <BiHeart size={20} className="mr-2" />
                  Add to Favorites
                </button>
              </div>
              <p className="mt-6">{product.description}</p>
            </div>
          </div>

          <div className="mt-24 pb-24 w-1/2 mx-auto">
            <div className="w-48 m-auto flex justify-between">
              <ProductInfoSwitch onClick={(value) => setDesc(value)} />
            </div>
            <p className={`${!desc && "hidden"} mt-6 text-center`}>
              {product.description}
            </p>
            <p className={`${desc && "hidden"} mt-6 text-center`}>
              No Information
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default ProductItem;
