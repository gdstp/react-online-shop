import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const CategoryCard: React.FC<
  Partial<HTMLDivElement> & { title: string; image: any; url: string }
> = ({ title, image, url, ...rest }) => {
  const style = {
    background: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  };
  return (
    <Link
      className={`${rest.className} relative flex flex-col justify-center items-center`}
      to={url}
    >
      <div className="flex justify-center items-center absolute z-20">
        <p className="font-semibold text-4xl text-white">{title}</p>
      </div>
      <div className="w-full h-full absolute t-0 l-0 z-10 bg-gray-400 bg-opacity-50 hover:bg-gray-700 hover:bg-opacity-50" />
      <div style={style} />
      <span className="w-16 h-16 rounded-full absolute z-20 bottom-0 right-0 mr-4 mb-4 bg-white flex justify-center items-center">
        <BsArrowRightShort className="text-black" size={26} />
      </span>
    </Link>
  );
};

export default CategoryCard;
