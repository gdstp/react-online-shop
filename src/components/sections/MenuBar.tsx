import React from "react";
import { BiSearch, BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import MenuItem from "./partials/MenuItem";

const MenuBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-2/3 h-40 flex justify-center text-gray-600 items-center m-auto relative">
        <div className="flex items-center absolute left-0">
          <MenuItem to="/categories/women's clothing" text="Women" />
          <MenuItem to="/categories/men's clothing" text="Men" />
          <MenuItem to="/categories/jewelery" text="Jewelry" />
          <MenuItem to="about" text="About" />
          <MenuItem to="contact" text="Contact" />
        </div>

        <div className="font-bold text-2xl">
          <Link to="/">
            <span className="text-primary">S</span>hop.
          </Link>
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
