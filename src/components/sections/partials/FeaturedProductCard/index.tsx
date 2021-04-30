import React, { useState } from "react";
import { Image } from "./styles";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const FeaturedProductCard: React.FC<{
  id: number;
  name: string;
  price: string;
  image: string;
}> = ({ id, name, price, image }) => {
  const [slicedName, setSlicedName] = useState(name);
  if (slicedName.length > 70) {
    setSlicedName(name.slice(0, 62) + "...");
  }
  return (
    <div className="w-full lg:w-11/50 h-96 lg:h-104 border border-gray-100 mt-2 mb-2">
      <div className="h-4/6 relative">
        <Link to={`/products/${id}`}>
          <Image url={image} />
        </Link>
        {/* <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center absolute right-0 bottom-0 mr-2 mb-2">
          <BsHeart size={20} />
        </div> */}
      </div>
      <div className="lg:mt-4">
        <Link to={`/products/${id}`}>
          <div className="px-1 text-center font-semibold text-regular lg:text-sm">
            <span data-tip={name}>{slicedName}</span>
            <ReactTooltip />
          </div>
          <p className="text-center lg:text-xs">${price}</p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
