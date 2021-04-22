import React from "react";
import { BiSearch, BiCart, BiUser } from "react-icons/bi";
import MenuItem from "./partials/MenuItem";

const MenuBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-2/3 h-40 flex justify-center text-gray-600 items-center m-auto relative">
        <div className="flex items-center uppercase  absolute left-0">
          <MenuItem text="Woman" />
          <MenuItem text="Man" />
          <MenuItem text="Jewelry" />
          <MenuItem text="About" />
          <MenuItem text="Contact" />
        </div>

        <div className="font-bold text-2xl">
          <span className="text-primary">S</span>hop.
        </div>

        <div className="flex absolute right-0">
          <BiSearch size={20} className="mx-4" />
          <BiCart size={20} className="mx-4" />
          <BiUser size={20} className="mx-4" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
