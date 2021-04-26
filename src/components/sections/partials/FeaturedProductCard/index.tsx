import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { Image } from "./styles";
import ReactTooltip from "react-tooltip";

const FeaturedProductCard: React.FC<{
  name: string;
  price: string;
  image: string;
}> = ({ name, price, image }) => {
  const [slicedName, setSlicedName] = useState(name);
  if (slicedName.length > 70) {
    setSlicedName(name.slice(0, 62) + "...");
  }
  return (
    <div className="w-11/50 h-104 border border-gray-100 mt-2 mb-2">
      <div className="h-5/6 relative">
        <Image url={image} />
        <div className="w-10 h-10 rounded-full bg-white absolute flex justify-center items-center absolute right-0 bottom-0 mr-2 mb-2">
          <BsHeart size={20} />
        </div>
      </div>
      <div className="mt-4">
        <div className="px-1 text-center font-semibold text-sm">
          <span data-tip={name}>{slicedName}</span>
          <ReactTooltip />
        </div>
        <p className="text-center text-xs">${price}</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;