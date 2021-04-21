import React from "react";
import { BiSearch, BiCart, BiUser } from "react-icons/bi";
import MenuItem from "./partials/MenuItem";

const MenuBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-2/3 h-16 flex justify-between text-gray-600 items-center m-auto">
        <div className="font-bold text-2xl">
          <span className="text-primary">S</span>hop.
        </div>

        <div className="flex items-center uppercase">
          <MenuItem text="Home" />
          <MenuItem text="About" />
          <MenuItem text="Products" />
          <MenuItem text="Contact" />
        </div>

        <div className="flex">
          <BiSearch size={20} className="mx-2" />
          <BiCart size={20} className="mx-2" />
          <BiUser size={20} className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
