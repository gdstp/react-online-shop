import React from "react";
import { AiOutlineLine } from "react-icons/ai";

const SlideShowBar: React.FC<{
  selectedItem: boolean;
  onClick: () => void;
}> = ({ selectedItem, onClick }) => {
  return (
    <AiOutlineLine
      size={48}
      onClick={onClick}
      className={`${!selectedItem && "text-gray-200"} cursor-pointer`}
    />
  );
};

export default SlideShowBar;
