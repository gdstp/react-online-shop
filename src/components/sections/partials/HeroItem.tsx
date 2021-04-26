import React from "react";

const HeroItem: React.FC<{
  show: boolean;
  title: string;
  button: string;
  image: any;
}> = ({ show, title, button, image }) => {
  return (
    <div
      className={`${
        show ? "flex" : "hidden"
      } w-full h-full flex-col justify-center items-center relative`}
    >
      <div className="absolute z-20 flex flex-col justify-center items-center">
        <p className="text-5xl font-semibold text-white">{title}</p>
        <button className="px-4 py-2 mt-20 bg-white text-black text-lg font-semibold">
          {button}
        </button>
      </div>
      <div className="absolute z-10 w-full h-full bg-gray-700 bg-opacity-50"></div>
      <img
        src={image}
        className="w-full h-full absolute t-0 l-0 z-0"
        alt="failed"
      />
    </div>
  );
};

export default HeroItem;
