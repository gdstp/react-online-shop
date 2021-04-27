import React, { useState } from "react";
import useParseUrl from "hooks/spliturl";
import { BiHeart } from "react-icons/bi";
import styled from "styled-components";
import FeaturedProducts from "components/sections/FeaturedProducts";
import ProductInfoSwitch from "components/sections/partials/ProductInfoSwitch";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";

const Image = styled.div<{ image: string }>`
  width: 50%;
  height: 604px;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Products: React.FC = () => {
  const product = useParseUrl()[2];
  const [desc, setDesc] = useState(true);
  return (
    <div>
      <div className="flex justify-between h-auto ">
        <Image image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
        <div className="w-1/2 px-14 flex flex-col justify-center -mt-24">
          <div className="flex flex-col">
            <p className="text-3xl font-semibold">Jeans with sequins</p>
            <p className="mt-1">$39.00</p>
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
          <p className="mt-6">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
        </div>
      </div>

      <div className="mt-24 h-64 w-1/2 mx-auto">
        <div className="w-48 m-auto flex justify-between">
          <ProductInfoSwitch onClick={(value) => setDesc(value)} />
        </div>
        <p className={`${!desc && "hidden"} mt-6 text-center`}>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <p className={`${desc && "hidden"} mt-6 text-center`}>No Information</p>
      </div>

      <FeaturedProducts />
    </div>
  );
};

export default Products;
