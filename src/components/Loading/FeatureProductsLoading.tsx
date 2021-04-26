import React from "react";
import { BsHeart } from "react-icons/bs";

const FeatureProductsLoading: React.FC = () => {
  return (
    <div className="w-11/50 h-104 border">
      <div className="h-5/6 bg-gray-200 animate-pulse relative">
        <div className="w-full h-5/6" />
        <div className="w-10 h-10 rounded-full bg-white absolute flex justify-center items-center absolute right-0 bottom-0 mr-2 mb-2">
          <BsHeart size={20} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-center w-2/3 h-4 m-auto bg-gray-200 animate-pulse font-semibold text-sm"></p>
        <p className="text-center w-1/2 h-4 m-auto mt-2 bg-gray-200 animate-pulse text-xs"></p>
      </div>
    </div>
  );
};

export default FeatureProductsLoading;
