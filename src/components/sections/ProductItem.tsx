import React, { useContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import useParseUrl from "hooks/spliturl";
import ProductInfoSwitch from "components/sections/partials/ProductInfoSwitch";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";
import { SingleProductReducer } from "store/reducers/ProductsReducer";
import { initialSingleProductState } from "store/types/ProductsType";
import { getSingleItem } from "store/actions/ProductsActions";
import ProductItemLoading from "components/Loading/ProductItemLoading";
import { Redirect } from "react-router";
import { AppCtx } from "context";

const Image = styled.div<{ image: string }>`
  width: 50%;
  height: 604px;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 302px;
  }
`;

const ProductItem: React.FC = () => {
  const { updateCart, cart } = useContext(AppCtx);
  const productId = parseInt(useParseUrl()[2]);
  const [{ product, error, loading }, dispatch] = useReducer(
    SingleProductReducer,
    initialSingleProductState
  );
  const [desc, setDesc] = useState(true);
  const [quantity, setQuantity] = useState("1");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: "REQUEST_PRODUCT" });
    getSingleItem(productId)
      .then((res) => dispatch({ type: "SUCCESS_PRODUCT", payload: res }))
      .catch((err) => dispatch({ type: "FAILED_PRODUCT", error: err }));
  }, [productId]);

  const handleClick = () => {
    updateCart({
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.image,
      },
      type: !cart.some((item) => item.id === product.id) ? "ADD" : "REMOVE",
    });
  };

  return (
    <>
      {loading && <ProductItemLoading />}
      {error && <Redirect to="/404" />}
      {!loading && product && (
        <>
          <div className="flex flex-col lg:flex-row justify-between h-auto">
            <Image image={product.image} />
            <div className="w-full lg:w-1/2 lg:px-14 flex flex-col justify-center mt-24 lg:-mt-24">
              <div className="flex flex-col">
                <p className="text-3xl font-semibold">{product.title}</p>
                <p className="mt-1">${product.price}</p>
              </div>

              <CategoryFilterItem
                title="Quantity:"
                items={["1", "2", "3", "4", "5"]}
                className="mt-6"
                handleChange={(value) => {
                  setQuantity(value);
                }}
              />

              <div className="flex mt-8">
                {!cart.some((item) => item.id === product.id) ? (
                  <button
                    className="w-40 py-2 bg-black text-white"
                    onClick={() => handleClick()}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="w-40 py-2 bg-red-500 text-white"
                    onClick={() => handleClick()}
                  >
                    Remove from Cart
                  </button>
                )}
                {/* <button className="flex justify-center ml-4 items-center w-40 py-2 text-sm font-semibold hover:text-red-500 transition">
                  <BiHeart size={20} className="mr-2" />
                  Add to Favorites
                </button> */}
              </div>
              <p className="mt-6">{product.description}</p>
            </div>
          </div>

          <div className="mt-24 pb-24 w-full lg:w-1/2 mx-auto">
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
