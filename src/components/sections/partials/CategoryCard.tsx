import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const CategoryCard: React.FC<Partial<HTMLDivElement> & { title: string }> = ({
  title,
  ...rest
}) => {
  return (
    <div
      className={`${rest.className} border bg-gray-200 relative flex justify-center items-center`}
    >
      <p className="font-semibold text-4xl text-white">{title}</p>
      <span className="w-16 h-16 rounded-full absolute bottom-0 right-0 mr-4 mb-4 bg-white flex justify-center items-center">
        <BsArrowRightShort className="text-black" size={26} />
      </span>
    </div>
  );
};

export default CategoryCard;
