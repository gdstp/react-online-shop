import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartItem from "../ui/CartIcon";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./partials/MenuItem";

const MenuBar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="w-full">
      <div className="w-10/12 lg:w-2/3 h-40 flex justify-between text-gray-600 items-center m-auto relative">
        <div className="font-bold text-2xl">
          <Link to="/">
            <span className="text-primary">S</span>hop.
          </Link>
        </div>

        <div className="lg:flex items-center hidden">
          <MenuItem to="/categories/women's clothing" text="Women" />
          <MenuItem to="/categories/men's clothing" text="Men" />
          <MenuItem to="/categories/jewelery" text="Jewelry" />
          <MenuItem to="/categories/electronics" text="Electronics" />
          <MenuItem to="/about" text="About" />
          <MenuItem to="/contact" text="Contact" />
        </div>

        <div className="flex lg:mt-0">
          <CartItem />
          <AiOutlineMenu
            size={20}
            className="block lg:hidden ml-4 mr-2 lg:mr-0"
            onClick={() => setDropdown(!dropdown)}
          />
        </div>
      </div>
      {dropdown && <MenuDropdown />}
    </div>
  );
};

export default MenuBar;
