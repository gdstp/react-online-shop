import React from "react";
import { BsHeart } from "react-icons/bs";

const FeaturedProductCard: React.FC<{
  name: string;
  price: string;
  image: string;
}> = ({ name, price, image }) => {
  const style = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:hover": {
      background: "red",
    },
  };

  return (
    <div className="w-11/50 h-104 border">
      <div className="h-5/6 relative">
        <div className="w-full h-5/6" style={style} />
        <div className="w-10 h-10 rounded-full bg-white absolute flex justify-center items-center absolute right-0 bottom-0 mr-2 mb-2">
          <BsHeart size={20} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center font-semibold text-sm">{name}</p>
        <p className="text-center text-xs">${price}</p>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
